import React, { useState, useEffect } from 'https://esm.sh/react@18.2.0'
import ReactDOM from 'https://esm.sh/react-dom@18.2.0'

function App() {
	const [openNav, setOpenNav] = useState(false);
	const [subData, setSubData] = useState({});

    return (
        <div className="App">
			<Header setOpenNav={setOpenNav} openNav={openNav} setSubData={setSubData} subData={subData} />
			
			<div className="cards">
				{
					carts.map((item, index) => (
						<CartItem key={index} data={item} setSubData={setSubData} subData={subData} />
					))
				}
			</div>
        </div>
    );
}

const Nav = (props) => {
	const { setOpenNav, setSubData, subData } = props;
	
	const [totalPrice, setTotalPrice] = useState(0);
	
	useEffect(() => {
		var bumpTotal = 0;
		Object.keys(subData).map((key) => {
			if(subData[key]["count"] <= 0) {
				let bump = {...subData};
				delete bump[key];
				setSubData(bump);
			}
			bumpTotal = bumpTotal + subData[key]["price"] * subData[key]["count"];
		});
		
		setTotalPrice(bumpTotal);
	}, [subData]);
	
	const removeElement = (id) => {
		let bump = {...subData};
		delete bump[id];
		setSubData(bump);
	}
	
	const changeCount = (id, preData,value) => {
		setSubData({...subData, [preData.id]: {
			id: preData.id,
			source: preData.source,
			name: preData.name,
			price: preData.price,
			count: Number(value),
		}})
	}
	
	const handleCheckOut = () => {
		alert("Afronden  " + totalPrice + "€");
	}
	
	return (
		<div className="nav">
			<div className="nav_content">
				<div className="close">
					<p>Mandje</p>
					<button onClick={() => setOpenNav(false)}>
						<i class="fa-regular fa-circle-xmark"></i>
					</button>
				</div>
				
				<div className="subtotal">
					<p>Subtotaal</p>
					<p>{Number(totalPrice).toFixed(2)}€</p>
				</div>
				
				<div className="added_carts">
					{
						Object.keys(subData).length > 0 ?
						Object.keys(subData).map((key, index) => (
							<SubCart data={subData[key]} changeCount={changeCount} removeElement={removeElement} />
						)) : (<p>Mandje Leeg</p>)
					}
				</div>
				
				<div className="checkout">
					<button onClick={handleCheckOut}>
						Betalen
					</button>
				</div>
			</div>
		</div>
	)
}

const SubCart = (props) => {
	const { data, changeCount, removeElement } = props;
	
	return (
		<div className="sub_cart">
			<div>
				<img src={data.source} alt="" /> 
				<div className="sub_content">
					<p>{data.name}</p>
					<button onClick={() => removeElement(data.id)}>Verwijderen</button>
				</div>
				<div className="sub_count">
					<input type="number" value={data.count} onChange={(e) => changeCount(data.id, data, e.target.value)} />
				</div>
			</div>
		</div>
	);
}

const Header = (props) => {
	const { setOpenNav, openNav, setSubData, subData } = props;
	const [totalCount, setTotalCount] = useState(0);
	
	useEffect(() => {
		var bumpTotal = 0;
		Object.keys(subData).map((key) => {
			bumpTotal += subData[key]["count"];
		});
		
		setTotalCount(bumpTotal);
	}, [subData]);
	
	return (
		<header>
			<div>
				<h2>Anadolu</h2>
			</div>
			<div className="navbar">
				<button onClick={() => setOpenNav(!openNav)}>
					<i class="fa-solid fa-cart-shopping"></i>
					{totalCount > 0 ?  (
						<div className="cart_count">
							{totalCount}
						</div>) : null}
				</button>
				
				{ openNav && <Nav setOpenNav={setOpenNav} setSubData={setSubData} subData={subData} /> }
			</div>
		</header>
	)
}

const CartItem = (props) => {
	const { data, setSubData, subData } = props;
	
	const addCart = (data) => {
		setSubData({...subData, [data.id]: {
			id: data.id,
			source: data.source,
			name: data.name,
			price: data.price,
			count: subData[data.id] ? subData[data.id]["count"] + 1 : 1,
		}})
	}
	
	return (
		<div className="card">
			<div className="avatar">
				<img src={data.source} alt="" />
			</div>
			
			<div className="content">
				<p>{data.name}</p>
				<div>
					<p>€{data.price}</p>
					<button onClick={() => addCart(data)}>Bestellen</button>
				</div>
			</div>
		</div>
	)
}

const carts = [
	{
		id: 1,
		source: "https://od.lk/s/OTFfMzExNTY0MjFf/pitta.jpg",
		name: "Pitta Broodje",
		price: 10.00
	},
	{
		id: 2,
		source: "https://od.lk/s/OTFfMzExNTY0NjJf/Pita-kipshoarma-4-1024x683.jpg",
		name: "Pitta Kip",
		price: 12.00
	},
	{
		id: 3,
		source: "https://od.lk/s/OTFfMzExNTY0NjNf/Kapsalon_Amstelveen.jpg",
		name: "Kapsalon",
		price: 15
	},
	{
		id: 4,
		source: "https://od.lk/s/OTFfMzExNTY0NjZf/FRANSHAMBURGER.jpg",
		name: "Frans Burger",
		price: 13
	},
	{
		id: 5,
		source: "https://od.lk/s/OTFfMzExNTY0NjVf/PITTAKIPKAAS.jpg",
		name: "Pitta Kaas",
		price: 14
	},
	{
		id: 6,
		source: "https://od.lk/s/OTFfMzExNTY0NjRf/pitta-kaas.jpg",
		name: "Kip Kaas",
		price: 15.00
	},
	{
		id: 7,
		source: "https://od.lk/s/OTFfMzExNTY0MjNf/fritten.jpg",
		name: "Frieten",
		price: 5.00
	},
]

ReactDOM.render(<App />, document.getElementById("root"));
