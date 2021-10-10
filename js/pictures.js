let state = [

]
// данные для генерации данных
let commentsArray = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
]
let descriptionArray = [
    'Тестим новую камеру!',
    'Затусили с друзьями на море',
    'Как же круто тут кормят',
    'Отдыхаем...',
    'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......',
    'Вот это тачка!',
]
// добавляем данные в массив ссылок на картинки
for (i = 0; i < 25; i++) {
    // ссылка на фото
    let url = `photos/${i+1}.jpg`

    // кол-во лайков (от 15 до 200)
    let likes = Math.floor(Math.random() * (200 - 15) + 15)

    // кол-во комментариев к фото
    // let commentsNum = Math.round(Math.random() * 3)
    let commentsNum = Math.round(Math.random() * 3)

    let comments = []
    // цикл отрисовки всех комментариев
    if (commentsNum > 0) {
        for (n = 0; n < commentsNum; n++) {
            //количество предложений в комментарии 1 или 2
            let commentsSentences = Math.round(Math.random() * (2 - 1) + 1)

            //комментарий
            if (commentsSentences === 1) {
                comments.push(commentsArray[Math.floor(Math.random() * commentsArray.length)])
            } else {
                comments.push(`${commentsArray[Math.floor(Math.random()*commentsArray.length)]} ${commentsArray[Math.floor(Math.random()*commentsArray.length)]}`)
            }
        }
    }

    // описание 
    let description = descriptionArray[Math.floor(Math.random() * descriptionArray.length)]

    // создание итогового объекта со всеми данными
    let item = {
        url,
        likes,
        comments,
        description
    }

    // добавляю итоговый объект в state
    state.push(item)
}

let pictureTemplate = document.querySelector('#picture-template')
    .content
    .querySelector('.picture')

const pictureAdd = (state) => {
    let pictureEl = pictureTemplate.cloneNode(true)

    pictureEl.querySelector('img').src = state.url
    pictureEl.querySelector('.picture-likes').textContent = state.likes
    pictureEl.querySelector('.picture-comments').textContent = state.comments.length
    return pictureEl
}

let picturesContainer = document.querySelector('.pictures')
for (i = 0; i < state.length; i++) {
    picturesContainer.appendChild(pictureAdd(state[i]))
}



let currentElOpen = picturesContainer.querySelectorAll('.picture')[0]

let bigPicture = document.querySelector('.gallery-overlay')

bigPicture.classList.remove('hidden')

bigPicture.querySelector('.gallery-overlay-image').src = currentElOpen.querySelector('img').src

bigPicture.querySelector('.social__caption').textContent = state[0].description

bigPicture.querySelector('.likes-count').textContent = currentElOpen.querySelector('.picture-likes').textContent

bigPicture.querySelector('.comments-count').textContent = currentElOpen.querySelector('.picture-comments').textContent


// добавляю список комментариев
let openCommentItem = document.querySelector('#comment__item')
    .content
    .querySelector('.social__comment')

console.log(state)
const visibleComments = (comment) => {
    let commentEl = openCommentItem.cloneNode(true)
    let img = Math.round(Math.random()*(6-1)+1)

    commentEl.querySelector('.social__picture').src = `img/avatar-${Math.round(Math.random()*(6-1)+1)}.jpg`
    commentEl.querySelector('.social__text').textContent = comment
    commentEl.querySelector('.social__text').textContent = comment

    return commentEl
}
let boxForComments = document.querySelector('.gallery-overlay-preview')
for (i = 0; i < state[0].comments.length; i++) {
    boxForComments.appendChild(visibleComments(state[0].comments[i]))
}