import { boxes } from './boxes'
import { instructors } from './instructors'
import { learnSection } from './learn'
import { learnReactSection } from './learn-react'
import { createNavBar } from './navbar'
import { newsletter } from './newsletter'
import { questions } from './questions'
import { showcase } from './showcase'

export const init = () => {
  const body = document.body

  const NavBar = document.createElement('nav')
  const ShowCaseSection = document.createElement('section')
  const SectionNewsLetter = document.createElement('section')
  const BoxesSection = document.createElement('section')
  const LearnSection = document.createElement('section')
  const LearnReactSection = document.createElement('section')
  const QuestionsSection = document.createElement('section')
  const InstructorsSection = document.createElement('section')
  const ContactSection = document.createElement('section')

  const navbar = createNavBar()
  const sectionWebDev = showcase()
  const sectionNewsLetter = newsletter()
  const box = boxes()
  const learn = learnSection()
  const learnreact = learnReactSection()
  const question = questions()
  const instructor = instructors()

  NavBar.setAttribute('class', 'navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top')

  ShowCaseSection.setAttribute('class', 'bg-dark text-light p-5 p-lg-3 pt-lg-5 text-center text-sm-start')

  SectionNewsLetter.setAttribute('class', 'bg-primary text-light p-5')

  BoxesSection.setAttribute('class', 'p-3')
  
  LearnSection.classList.add('p-5')
  LearnSection.setAttribute('id', 'learn')
  
  LearnReactSection.setAttribute('class', 'p-5 bg-dark text-light')

  QuestionsSection.classList.add('p-5')
  QuestionsSection.setAttribute('id', 'questions')

  InstructorsSection.setAttribute('id', 'instructors')
  InstructorsSection.setAttribute('class', 'p-5 bg-primary')

  ContactSection.classList.add('p-5')

  NavBar.innerHTML = navbar
  ShowCaseSection.innerHTML = sectionWebDev
  SectionNewsLetter.innerHTML = sectionNewsLetter
  BoxesSection.innerHTML = box
  LearnSection.innerHTML = learn
  LearnReactSection.innerHTML = learnreact
  QuestionsSection.innerHTML = question
  InstructorsSection.innerHTML = instructor

  body.append(NavBar)
  body.append(ShowCaseSection)
  body.append(SectionNewsLetter)
  body.append(BoxesSection)
  body.append(LearnSection)
  body.append(LearnReactSection)
  body.append(QuestionsSection)
  body.append(InstructorsSection)
  body.append(ContactSection)
}
