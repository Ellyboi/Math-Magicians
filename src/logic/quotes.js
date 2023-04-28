const mathQuotes = [
  {
    quote: 'Pure mathematics is, in its way, the poetry of logical ideas.',
    author: 'Albert Einstein',
  },
  {
    quote:
      "In mathematics, you don't understand things. You just get used to them.",
    author: 'John von Neumann',
  },
  {
    quote: 'Mathematics is the language in which God has written the universe.',
    author: 'Galileo Galilei',
  },
  {
    quote: 'Mathematics is the music of reason.',
    author: 'James Joseph Sylvester',
  },
  {
    quote:
      'Mathematics is the queen of sciences and arithmetic is the queen of mathematics.',
    author: 'Carl Friedrich Gauss',
  },
  {
    quote:
      'God exists since mathematics is consistent, and the Devil exists since we cannot prove it.',
    author: 'Andre Weil',
  },
  {
    quote:
      'The essence of mathematics is not to make simple things complicated, but to make complicated things simple.',
    author: 'S. Gudder',
  },
  {
    quote:
      'Mathematics is the most beautiful and most powerful creation of the human spirit.',
    author: 'Stefan Banach',
  },
  {
    quote:
      'Mathematics is the art of giving the same name to different things.',
    author: 'J. H. Poincare',
  },
  {
    quote:
      'The mathematician does not study pure mathematics because it is useful; he studies it because he delights in it and he delights in it because it is beautiful.',
    author: 'Henri Poincare',
  },
  {
    quote:
      'In mathematics, the art of asking questions is more valuable than solving problems.',
    author: 'Georg Cantor',
  },
  {
    quote:
      'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding.',
    author: 'William Paul Thurston',
  },
  {
    quote:
      'The study of mathematics, like the Nile, begins in minuteness but ends in magnificence.',
    author: 'Charles Caleb Colton',
  },
  {
    quote: 'Mathematics is the door and key to the sciences.',
    author: 'Roger Bacon',
  },
  {
    quote: 'Pure mathematics is, in its way, the poetry of logical ideas.',
    author: 'Albert Einstein',
  },
  {
    quote:
      "In mathematics, you don't understand things. You just get used to them.",
    author: 'John von Neumann',
  },
  {
    quote:
      'Mathematics is the most beautiful and most powerful creation of the human spirit.',
    author: 'Stefan Banach',
  },
  {
    quote: 'Mathematics is a language that describes the universe.',
    author: 'Nikola Tesla',
  },
  {
    quote: 'Mathematics is a way to settle in your mind a habit of reasoning.',
    author: 'Henry Louis Mencken',
  },
  {
    quote:
      'Mathematics is the tool specially suited for dealing with abstract concepts of any kind and there is no limit to its power in this field.',
    author: 'Paul Dirac',
  },
  {
    quote:
      'In mathematics, the art of proposing a question must be held of higher value than solving it.',
    author: 'Georg Cantor',
  },
];

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateQuote = () => {
  const index = getRandomInt(0, 20);
  return mathQuotes[index];
};

export default generateQuote;
