function seeMore() {
  document.getElementById('seeMore').style.display = 'inline'
  document.getElementById('seeMoreButton').style.display = 'none'
}

function hideText() {
  document.getElementById('seeMore').style.display = 'none'
  document.getElementById('seeMoreButton').style.display = 'inline'
}

function seeMoreAnswers() {
  document.getElementById('moreAnswers').style.display = 'flex'
}

function hideMoreAnswers() {
  document.getElementById('moreAnswers').style.display = 'none'
}

function newTopic() {
  document.getElementById('form').style.display = 'block'
  document.getElementById('ideas').style.display = 'none'
  document.getElementById('newTopicSuccess').style.display = 'none'
}

function newComment() {
  document.getElementById('newTopicSuccess').style.display = 'flex'
  document.getElementById('newTopic').style.display = 'block'
  document.getElementById('form').style.display = 'none'
}

function mobileMenu() {
  document.getElementById('modal').style.display = 'flex'
}
