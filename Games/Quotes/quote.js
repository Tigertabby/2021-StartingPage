const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Billy Wilder',
    position: 'Regisseur 1906 - 2002',
    photo:
      'quote2.jpg',
    text:
      "Some people just turn a blind eye so they can aim better.",
  },
  {
    name: 'Steve Jobs',
    position: 'Entrepreneur 1955 - 2011',
    photo: 'quote7.jpg',
    text:
      'Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven\'t found it yet, keep looking. Don\'t settle. As with all matters of the heart, you\'ll know when you find it.',
  },
  {
    name: 'Charlie Chaplin',
    position: 'Actor 1889 - 1977',
    photo: 'quote4.jpg',
    text:
      'Over the years I have discovered that ideas come through an intense desire for them; continually desiring, the mind becomes a watch-tower on the look-out for incidents that may excite the imagination – music, a sunset, may give image to an idea.',
  },
  {
    name: 'Roald Dahl',
    position: 'Author 1916- 1990',
    photo: 'quote5.jpg',
    text:
      'And above all, watch with glittering eyes the whole world around you because the greatest secrets are always hidden in the most unlikely places. Those who don\'t believe in magic will never find it.',
  },

]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)