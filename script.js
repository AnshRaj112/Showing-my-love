const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML =
    '<img src="1.jpg" />'
  title.innerHTML = 'Dear Love'
  excerpt.innerHTML =
    'Falling in love with you has been the best thing for me in this life. I still wonder how such a beautiful, loving, and caring girl can love someone like me. I think I have just been lucky. I promise to always be there for you, to keep you happy and smiling, and to never stop wooing you'
  profile_img.innerHTML =
    '<img src="2.jpg" alt="" />'
  name.innerHTML = 'Your Love Ansh <3'
  date.innerHTML = '❤️💕 '

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}
