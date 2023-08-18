export interface Product {
    id: number;
    name: string;
    image: string;
  }
export interface Pets {
    id: number,
    name: string,
    image: string,
    breed: string,
    text: string,
    age: string,
    inoculations: Array<string>,
    diseases:  Array<string>,
    parasites:  Array<string>
}
export const products = [
    {
        id: 1,
        name: 'Pet food',
        image: '/assets/img/help/petFood.svg'
    },
    {
        id: 2,
        name: 'Transportation',
        image: '/assets/img/help/transportation.svg'
    },
    {
        id: 3,
        name: 'Toys',
        image: '/assets/img/help/toys.svg'
    },
    {
        id: 4,
        name: 'Bowls and cups',
        image: `/assets/img/help/bowls.svg`
    },
    {
        id: 5,
        name: 'Shampoos',
        image: '/assets/img/help/shampoos.svg'
    },
    {
        id: 6,
        name: 'Vitamins',
        image: '/assets/img/help/vitamins.svg'
    },
    {
        id: 7,
        name: 'Medicines',
        image: '/assets/img/help/medicines.svg'
    },
    {
        id: 8,
        name: 'Collars / leashes',
        image: '/assets/img/help/collars.svg'
    },
    {
        id: 9,
        name: 'Sleeping areas',
        image: '/assets/img/help/areas.svg'
    },
]
export const pets = [
    {
        id: 1,
        name: 'Katrine',
        image: '/assets/img/pets-katrine.png',
        breed: 'Cat - British Shorthair',
        text: 'Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.',
        age: "6 months",
        inoculations: ["panleukopenia"],
        diseases: ["none"],
        parasites: ["none"]
    },
    {
        id: 2,
        name: 'Jennifer',
        image: '/assets/img/pets-jennifer.png',
        breed: 'Dog - Labrador',
        text: 'Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won\'t hesitate to play up a storm in the house if she has all of her favorite toys.',
        age: '2 months',
        inoculations: ["none"],
        diseases: ["none"],
        parasites: ["none"]
    },
    {
        id: 3,
        name: 'Woody',
        image: '/assets/img/pets-woody.png',
        breed: 'Dog - Golden Retriever',
        text: 'Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.',
        age: "3 years 6 months",
        inoculations: ["adenovirus", "distemper"],
        diseases: ["right back leg mobility reduced"],
        parasites: ["none"]
    },
    {
        id: 4,
        name: 'Sophia',
        image: '/assets/img/pets-sophia.png',
        breed: 'Dog - Shih tzu',
        text: 'Sophia here and I\'m looking for my forever home to live out the best years of my life. I am full of energy. Everyday I\'m learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.',
        age: "1 month",
        inoculations: ["parvovirus"],
        diseases: ["none"],
        parasites: ["none"]
    },
    {
        id: 5,
        name: 'Timmy',
        image: '/assets/img/pets-timmy.png',
        breed: 'Cat - British Shorthair',
        text: 'Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.',
        age: "2 years 3 months",
        inoculations: ["calicivirus", "viral rhinotracheitis"],
        diseases: ["kidney stones"],
        parasites: ["none"]
    },
    {
        id: 6,
        name: 'Charly',
        image: '/assets/img/pets-charly.png',
        breed: 'Dog - Jack Russell Terrier ',
        text: 'This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.',
        age: "8 years",
        inoculations: ["bordetella bronchiseptica", "leptospirosis"],
        diseases: ["deafness", "blindness"],
        parasites: ["lice", "fleas"]
    },
    {
        id: 7,
        name: 'Scarlett',
        image: '/assets/img/pets-scarlet.png',
        breed: 'Dog - Jack Russell Terrier',
        text: 'Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.',
        age: "3 months",
        inoculations: ["parainfluenza"],
        diseases: ["none"],
        parasites: ["none"]
    },
    {
        id: 8,
        name: 'Freddie',
        image: '/assets/img/pets-freddie.png',
        breed: 'Cat - British Shorthair',
        text: 'Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.',
        age: "2 months",
        inoculations: ["rabies"],
        diseases: ["none"],
        parasites: ["none"]
    },
]