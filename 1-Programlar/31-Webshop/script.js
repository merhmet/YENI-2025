new Vue({
			el: '#app',
			data: {
				// load items
				items: getAllProducts()
			},
			computed: {
				/**
				 * total value of basket
				 * @return float
				 */
				total: function() {
					var total = 0;
					this.items.forEach(function(item) {
						total += item.price*item.quantity;
					});
					return Math.round(total*100)/100;
				},

				/**
				 * get number of favourites
				 * @return int
				 */
				favourites: function() {
					var counter = 0;
					this.items.forEach(function(item) {
						counter += item.favourite?1:0;
					});
					return counter;
				},

				/**
				 * Items are on basket
				 * @return {[type]} [description]
				 */
				itemsOnBasket: function() {
					var iob = [];
					this.items.forEach(function(item) {
						if (item.quantity > 0) {
							iob.push(item);
						}
					});
					return iob;
				},

				/**
				 * Items are on favourite
				 * @return array
				 */
				itemsOnFavourites: function() {
					var iof = [];
					this.items.forEach(function(item) {
						if (item.favourite) {
							iof.push(item);
						}
					});
					return iof;
				},
			},

			methods: {
				/**
				 * drops all favourites
				 */
				dropFavourites: function() {
					this.items.forEach(function(item) {
						item.favourite = false;
					});
				},

				/**
				 * drops all basket
				 */
				dropBasket: function() {
					this.items.forEach(function(item) {
						item.quantity = 0;
					});
				}
			}
		});


/**
* Get all lego products' data
* @return array
*/
function getAllProducts() {
	return [
		{
			img: 'http://rajcsanyizoltan.hu/codepen/sw01.png',
			title: 'Guavian Security Soldier',
			info: 'Guavian soldiers undergo cybernetic augmentation, with a mechanical reservoir and pump injecting chemicals into their bloodstreams to enhance speed and aggression. They are silent in battle, communicating via high-frequency datastreams. Han Solo ran afoul of the Guavians for failing to repay their 50,000-credit loan.',
			favourite: false,
			price: 0.75,
			category: 'Star Wars',
			quantity: 1,
		},
		{
			img: 'http://rajcsanyizoltan.hu/codepen/sw02.png',
			title: 'First Order Snowtrooper',
			info: 'First Order Snowtroopers are specialized stormtroopers trained and equipped to operate in the galaxy’s coldest environments. They wear the latest thermally insulated armor plating over a quilted body suit, and even their boots have extra-tough grips for walking on frozen terrain. The narrow visor-slit in their helmets cuts down on glare from surrounding ice, letting them battle more effectively.',
			favourite: false,
			price: 1.15,
			category: 'Star Wars',
			quantity: 0
		},
												{
			img: 'http://rajcsanyizoltan.hu/codepen/sw03.png',
			title: 'IG-88',
			info: 'Tall, thin and extremely intimidating, IG-88 is an IG-series assassin droid who has turned his extremely capable skills to the job of bounty hunting. His sophisticated stealth and tracking programming and a 360-degree ring of glowing orange optical sensors make him hard to hide from, and almost impossible to escape.',
			favourite: false,
			price: 1,
			category: 'Star Wars',
			quantity: 0
		},
		{
			img: 'http://rajcsanyizoltan.hu/codepen/sw04.png',
			title: 'Quarrie',
			info: 'Quarrie is the curmudgeonly old Mon Calamari engineer who designed the Rebel Alliance’s first prototype B-Wing Fighter. A genius at starship design who prefers to be left alone while he works, he reluctantly agrees to take Rowan Freemaker on as an apprentice, but soon comes to respect the impulsive youngster’s amazing instinct for creative building.',
			favourite: false,
			price: 0.5,
			category: 'Star Wars',
			quantity: 0
		},
		{
			img: 'http://rajcsanyizoltan.hu/codepen/sw05.png',
			title: '4-LOM',
			info: 'Once a basic protocol droid, the ambitious 4-LOM broke his own programming to become a professional bounty hunter, scouring the galaxy for most-wanted targets in exchange for valuable credits and upgrades. His insect-like head, modeled after the species that he was originally built to serve, makes him recognizable wherever he goes.',
			favourite: false,
			price: 2,
			category: 'Star Wars',
			quantity: 0
		},
		{
			img: 'http://rajcsanyizoltan.hu/codepen/sw06.png',
			title: 'Probe Droid',
			info: 'When you’re looking for someone who could be hiding anywhere in the galaxy, why send an Imperial spy or an expensive bounty hunter when you could release a swarm of probe droids? Equipped with cameras, blasters and long-range communication arrays, these sneaky, hovering, multi-armed droids can be launched through space to locate your enemies, observe their activities, and then report back everything that they find.',
			favourite: false,
			price: 3,
			category: 'Star Wars',
			quantity: 0
		},
		{
			img: 'http://rajcsanyizoltan.hu/codepen/sw07.png',
			title: 'Bossk',
			info: 'A reptilian Trandoshan, Bossk is a cold-blooded and capable bounty hunter with a particular hatred for Wookiees. He prefers to work alone, but is willing to cooperate with his fellow bounty hunters if it means that they will have a better chance of tracking down and capturing an especially dangerous target…at least, if the fee is high enough to share.',
			favourite: false,
			price: 0.30,
			category: 'Star Wars',
			quantity: 0
		},
		{
			img: 'http://rajcsanyizoltan.hu/codepen/sw08.png',
			title: 'First Order Colonel',
			info: 'Officers in the First Order military have been trained to believe in the cause and methods of the old Galactic Empire above all else. With complete obedience to Supreme Leader Snoke, they permit no disloyalty or hesitation in the troops under their command as they seek to tear down the New Republic and crush the Resistance.',
			favourite: false,
			price: 1,
			category: 'Star Wars',
			quantity: 0
		},
												{
			img: 'http://rajcsanyizoltan.hu/codepen/sw09.png',
			title: 'Resistance officer',
			info: 'Resistance officers are commanders in the effort to repel the attacks of the evil First Order. All volunteers, and many veterans of the old Rebel Alliance, they lead their forces through clever tactics and brave inspiration as they fight to protect the New Republic and defend the cause of freedom throughout the galaxy.',
			favourite: false,
			price: 1,
			category: 'Star Wars',
			quantity: 0
		},
		{
			img: 'http://rajcsanyizoltan.hu/codepen/sw10.png',
			title: 'Unkar’s Thug',
			info: 'At Niima Outpost on Jakku, the greedy junk boss Unkar Plutt has hired a group of petty criminals to act as his eyes, ears and fists. Bullies with more muscle than brains, they are happy to take Unkar’s low wages in exchange for getting to deal with any junk scavenger who dares to defy his authority or try to make deals without cutting him in on the profits.',
			favourite: false,
			price: 2.25,
			category: 'Star Wars',
			quantity: 0
		},
		{
			img: 'http://rajcsanyizoltan.hu/codepen/sw11.png',
			title: 'Aayla Secura',
			info: 'Aayla Secura is a Jedi Master and a member of the Twi’lek species. During the Clone Wars, she leads the clone troopers of the Republic’s 327th Star Corps in battle against the droid forces of the Separatists. She is skilled with a lightsaber and is known for having a better sense of humor than most Jedi Knights.',
			favourite: true,
			price: 2,
			category: 'Star Wars',
			quantity: 0
		},
		{
			img: 'http://rajcsanyizoltan.hu/codepen/sw12.png',
			title: 'Bala-Tik',
			info: 'A human agent of the Guavian Death Gang, Bala-Tik is determined to collect the credits owed to his criminal organization by the infamous smuggler, Captain Han Solo. Unfortunately for him, Solo’s cargo freighter is carrying a pair of ravenous rathtars, which soon set their sights – and their appetites – on Bala-Tik and his soldiers.',
			favourite: false,
			price: 1,
			category: 'Star Wars',
			quantity: 0
		},
		{
			img: 'http://rajcsanyizoltan.hu/codepen/sw13.png',
			title: 'Clone Trooper Gunner',
			info: 'The Republic’s clone troopers may all share the same face and genes, but not every clone serves the same function. Some are specially trained to use the heavy weaponry of vehicles like tanks and gunships. These clone trooper gunners wear reinforced armor and sound-dampening helmets to help them handle the recoil and noise of heavy laser blasters.',
			favourite: false,
			price: 1,
			category: 'Star Wars',
			quantity: 0
		},
		{
			img: 'http://rajcsanyizoltan.hu/codepen/sw14.png',
			title: 'M-OC Hunter Droid',
			info: 'A mechanical creation personally designed by Emperor Palpatine himself, the fearsome M-OC is programmed for a single, all-consuming task: to hunt down the Force-sensitive Rowan Freemaker and retrieve him for the Emperor. To complete his mission, M-OC has been outfitted with a powerful hunter-seeker starship, the Tracker I, and an entire arsenal of built-in weaponry and gadgets that he can deploy against any obstacle in his way.',
			favourite: false,
			price: 2.25,
			category: 'Star Wars',
			quantity: 0
		},
		{
			img: 'http://rajcsanyizoltan.hu/codepen/sw15.png',
			title: 'Chopper™',
			info: 'C1-10P, nicknamed “Chopper”, is a very unusual little droid. Once an outdated astromech model, he has been customized, repaired and rebuilt over the years, leaving him with a mismatched appearance and a variety of useful gadgets hidden inside his patchwork body. He has also developed a mischievous and cranky personality, but the crew of the Ghost puts up with his antics because they know that Chopper is ultimately loyal and helpful…at least, when he feels like it.',
			favourite: false,
			price: 1.5,
			category: 'Star Wars',
			quantity: 0
		},
		{
			img: 'http://rajcsanyizoltan.hu/codepen/sw16.png',
			title: 'Admiral Raddus™',
			info: 'A member of the amphibious Mon Calamari species, Admiral Raddus has proven his leadership qualities as a high-ranking member of the Rebel Alliance. He and the brave forces under his command will do whatever they can to take down the Galactic Empire and end the Emperor’s reign of tyranny over the galaxy.',
			favourite: false,
			price: 1.2,
			category: 'Star Wars',
			quantity: 0
		},
		{
			img: 'http://rajcsanyizoltan.hu/codepen/sd01.png',
			title: 'Fred Joness',
			info: 'Fred is the glue that keeps Mystery Inc. together, and his mind is always two or three steps ahead of the monster they’re after. He sees mysteries as a chess match, and nothing makes him happier than planning genius and elaborate traps to catch ghosts, vampires, bogeymen and more!',
			favourite: false,
			price: 0.5,
			category: 'Scooby-Doo',
			quantity: 0
		},
		{
			img: 'http://rajcsanyizoltan.hu/codepen/sd02.png',
			title: 'Daphne Blake',
			info: 'Brave, beautiful and brainy, Daphne is the most enthusiastic member of Mystery Inc. She never leaves home without her camera and her notebook because someday she wants to be either a famous mystery writer or an investigative journalist. While she and Velma might be tied for most fearless members of the group, Daphne is definitely the most danger-prone. Unafraid to plunge forward into scary situations, it’s a good thing Daphne has a background in martial arts!',
			favourite: false,
			price: 0.75,
			category: 'Scooby-Doo',
			quantity: 0
		},
		{
			img: 'http://rajcsanyizoltan.hu/codepen/sd03.png',
			title: 'Velma Dinkley',
			info: 'Velma is the resident whiz kid of Mystery Inc. Her hyper-analytical mind deciphers clues almost as fast as she can say “Jinkies!” Although the group tries to stick together, Velma often ends up wandering off by herself, searching for the next clue. While Scooby-Doo’s weakness is snacks, Velma’s weakness is her glasses. Without her black-rimmed specs, she’s almost completely blind!',
			favourite: false,
			price: 0.75,
			category: 'Scooby-Doo',
			quantity: 2
		},
		{
			img: 'http://rajcsanyizoltan.hu/codepen/sd04.png',
			title: 'Shaggy Rogers',
			info: 'Like, Shaggy might be the hungriest, goofiest, most-fearful member of the group, but the bond he shares with Scooby-Doo sees him through thick and thin. He might run at the first sign of danger, but when it comes to helping his friends, he’s always ready to step in! Although Shaggy’s main talent is snacking, he also has a special gift: he is a renowned ventriloquist, and he has used this special ability on more than one occasion to get Mystery Inc. out of sticky situations!',
			favourite: false,
			price: 0.75,
			category: 'Scooby-Doo',
			quantity: 1
		},
		{
			img: 'http://rajcsanyizoltan.hu/codepen/sd05.png',
			title: 'Scooby-Doo',
			info: 'A Great Dane with an even greater appetite, Scooby-Doo reluctantly chases ghosts and ghouls with the rest of Mystery Inc. Although Scooby-Doo is always up for an adventure, he prefers activities that end with an all-you-can-eat buffet. When his friends need him, Scooby-Doo will run to the rescue! His best friend in the whole world is Shaggy, and you can usually find the two of them running away from a monster or snacking on double-decker sandwiches in the back of the Mystery Machine.',
			favourite: false,
			price: 0.75,
			category: 'Scooby-Doo',
			quantity: 0
		},
		{
			img: 'http://rajcsanyizoltan.hu/codepen/sd06.png',
			title: 'Swamp Creature',
			info: 'Beware the swamp if you don’t want to run into the sticky, slimy Swamp Creature! Stomping back and forth and groaning loudly enough to be heard by the townspeople nearby, no one has been brave enough to enter the swamp – until Mystery Inc. showed up in town!',
			favourite: false,
			price: 0.75,
			category: 'Scooby-Doo',
			quantity: 0
		},
		{
			img: 'http://rajcsanyizoltan.hu/codepen/sd07.png',
			title: 'The Headless Horseman',
			info: 'Many years ago, the Headless Horseman was a soldier who had his head knocked off by a cannonball before he was buried in Sleepy Hollow. Every Halloween he rises from the grave to look for a new head, and lately he seems to be interested in the Crane Family Diamond!',
			favourite: false,
			price: 0.75,
			category: 'Scooby-Doo',
			quantity: 0
		},
		{
			img: 'http://rajcsanyizoltan.hu/codepen/sd08.png',
			title: 'Mummy',
			info: 'Ankha was the most feared of all Egyptian Pharaohs. After his death and burial 3000 years ago, Ankha’s tomb had been recently uncovered and his mummy brought to the Department of Archeology in America. The Pharaoh created a curse that declared whoever removed him from his tomb would be turned to stone, but the curse never came true.',
			favourite: false,
			price: 0.75,
			category: 'Scooby-Doo',
			quantity: 0
		},
		{
			img: 'http://rajcsanyizoltan.hu/codepen/sd09.png',
			title: 'Zombie',
			info: 'A mumbling, stumbling creature has been scaring locals out of the woods for weeks. He always seems to be digging in the ground when people wander by…',
			favourite: false,
			price: 0.9,
			category: 'Scooby-Doo',
			quantity: 0
		},
		{
			img: 'http://rajcsanyizoltan.hu/codepen/sd10.png',
			title: 'Lighthouse Keeper',
			info: 'The Lighthouse Keeper is the creepy, shuffling ghost that haunts the old Wisconsin lighthouse and doesn’t let any boats dock at the lighthouse; that is, except for boats owned by the Dempsey family.',
			favourite: false,
			price: 0.9,
			category: 'Scooby-Doo',
			quantity: 0
		},
		{
			img: 'http://rajcsanyizoltan.hu/codepen/sd11.png',
			title: 'Black Knight',
			info: 'The Black Knight was a large, black suit of English armor that was rumored to come alive at night when the moon was full. Despite being made out of heavy metal, the Black Knight could move very quickly, and you would never know where he was – until he was right behind you!',
			favourite: false,
			price: 2.25,
			category: 'Scooby-Doo',
			quantity: 0
		},
		{
			img: 'http://rajcsanyizoltan.hu/codepen/sd12.png',
			title: 'Ghost',
			info: 'A spooky phantom that walks through walls and glows in the dark. His creepy moans echo throughout the Mystery Mansion, scaring locals away.',
			favourite: false,
			price: 0.9,
			category: 'Scooby-Doo',
			quantity: 0
		},
		{
			img: 'http://rajcsanyizoltan.hu/codepen/sd13.png',
			title: 'Vampire',
			info: 'With pale skin, pointy ears and glowing red eyes, the Vampire has been keeping people away from the Mystery Mansion for years. When he first met Mystery Inc., he attempted to lure them into multiple traps within the mansion, but was unsuccessful.',
			favourite: false,
			price: 0.9,
			category: 'Scooby-Doo',
			quantity: 0
		},
	]
}