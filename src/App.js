import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import BiCards from './components/BiCards';
import NewWords from './components/NewWords';

class App extends Component {

  setInitialState() {
    this.setState ({
      isMenuOpen: false,
      currentCard: 0,
      fullCard: true,
      englishFirst: true,
      cards: [
        {source: "Dead wood", translate: "балласт, что-нибуть негодное, бесполезное"},
        {source: "Put your oar in", translate: "Вставить свои 5 копеек, стревать в разговор"},
        {source: "Been counter", translate: "Бухгалтер, счетовод"},
        {source: "Rat race", translate: "Бешенная погоня за богатством, ожесточенная конкуренция"},
        {source: "Dogsbody", translate: "мальчик на побегушках, принеси подай, за маленькую плату"},
        {source: "Cushy job", translate: "Непьільная работенка, тепленькое местечко"},
        {source: "Get the boot", translate: "Бьіть уволенньім"},
        {source: "A Mickey Mouse job", translate: "Халтура, несерьезная, наспех сделанная работа"},
        {source: "Lip service", translate: "Неискренние словоизлияния, пустьіе слова"},
        {source: "Lemon", translate: "Барахло, недоброкачественное изделие"},
        {source: "Cash cow", translate: "Надежньій источник денег, дойная корова"},
        {source: "Idea hamster", translate: "Генератор идей"},
        {source: "Basket case", translate: "Кто-либо или что-либо, находящееся в плачевном, изношенном состоянии, слабьій, немощньій человек"},
        {source: "Stress Puppy", translate: "Человек, преуспевающий в стрессовьіх ситуациях"},
        {source: "Seagull Manager", translate: "Тип менеджера, которьій налетает, шумит и улетает, оставляя после себя разраху и хаос"},
        {source: "Empty suit", translate: "Работник, которьій не вьіполняет важную работу, не справляется с ней или устроился по протекции"},
        {source: "Goldbricker", translate: "Человек, увиливающий, уклоняющийся от работьі, обязанностей, сачок, лентяй, халтурщик"},
        {source: "Happy camper", translate: "Достаточно довольньій собой человек (иронич.)"},
        {source: "Wombat", translate: "Пустьішка (программа, не стоящая затрат денег, мозгов и времени; Странньій человек, странная личность"},
        {source: "Mover and shaker", translate: "Первое лицо, влиятельное лицо"}
      ]
    })
  }
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
      currentCard: 0,
      fullCard: true,
      englishFirst: true,
      cards: [],
      mode: 'cards'
    }
    this.onClickHandler = this.onClickHandler.bind(this)
  }

  componentWillMount() {
    this.setInitialState();
  }

  changeRootState(object) {
    this.setState(object)
  }

  onClickHandler() {
    this.setState(prevState => ({
      currentCard: (prevState.currentCard >= prevState.cards.length-1) ? 0 : prevState.currentCard + 1
    }))
  }

  toggleFullCards() {
    this.setState(prevState => ({
      fullCard: !prevState.fullCard
    }))
  }

  reverseCards() {
    this.setState(prevState => ({
      englishFirst: !prevState.englishFirst,
      cards: prevState.cards.map((el) => {return {source: el.translate, translate: el.source}})
    }))
  }

  onMoodIdiomsClick() {
    this.setState(prevState => ({
      isMenuOpen: false,
      currentCard: 0,
      fullCard: true,
      englishFirst: true,
      cards: [
        {source: "I'm totally over the moon", translate: "Я безумно счастлив"},
        {source: "I haven't got a care in the world", translate: "Меня ничто не тревожит(мне не о чем беспокоиться)"},
        {source: "I couldn't care less", translate: "Мне совершенно безразлично (наплевать)"},
        {source: "She threw a wobbly", translate: "Она не в себе"},
        {source: "I had a complete fit", translate: "Меня не на шутку разозлили"},
        {source: "She blew her top", translate: "У нее крьіша поехала"},
        {source: "There's a bad vibe round here", translate: "Здесь плохая (тяжелая) атмосфера"},
        {source: "(I'm) bored to death", translate: "(мне) смертельно скучно"},
        {source: "Get annoyed", translate: "раздражаться"},
        {source: "(feel) miserable (about)", translate: "жалкий, несчастньій (из-за)"},
        {source: "beside oneself with", translate: "вне себя от какого-то чувства"},
        {source: "have half a mind to", translate: "подумьівать о том, чтобьі"},
        {source: "keep cool", translate: "сохранять хладнокровие"},
        {source: "take to heart", translate: "принимать близко к сердцу"},
        {source: "sick and tired", translate: "уставший от чего-то надоедливого"},
        {source: "come to one's senses", translate: "прийти в себя"},
        {source: "straine at the leash", translate: "сгорать от нетерпения (сделать/делать что-то)"},
      ]
    }))
  }
  onNewWordsClick() {
    this.setState(prevState => ({
      isMenuOpen: false,
      currentCard: 0,
      fullCard: true,
      englishFirst: true,
      cards: [
        {source: "Disposable", translate: "A disposable product is intended to be thrown away after use"},
        {source: "Guilt-ridden", translate: "filled with feelings of guilt"},
        {source: "Remorse", translate: "Remorse is an emotional expression of personal regret felt by a person after they have committed an act which they deem to be shameful, hurtful, or violent."},
        {source: "Reckon", translate: "Opinion or recalculation"},
        {source: "Rumor", translate: "A currently circulating story or report of uncertain or doubtful truth."},
        {source: "Pillars", translate: "a tall vertical structure of stone, wood, or metal, used as a support for a building, or as an ornament or monument.."},
        {source: "Rumor", translate: "A currently circulating story or report of uncertain or doubtful truth."},
      ]
    }))
  }
  onConditionsClick() {
    this.setState(prevState => ({
      isMenuOpen: false,
      currentCard: 0,
      fullCard: true,
      englishFirst: true,
      cards: [
        {
          source: "Type 1: It is possible and also very likely that the condition will be fulfilled.",
          translate: "Form: if + Simple Present, will-Future",
          examples: ["Example: If I find her address, I’ll send her an invitation."]
        },
        {
          source: "Type 2: It is possible but very unlikely, that the condition will be fulfilled.",
          translate: "Form: if + Simple Past, Conditional I (= would + Infinitive)",
          examples: ["Example: If I found her address, I would send her an invitation."]
        },
        {
          source: "Type 3: It is impossible that the condition will be fulfilled because it refers to the past.",
          translate: "Form: if + Past Perfect, Conditional II (= would + have + Past Participle)",
          examples: ["Example: If I had found her address, I would have sent her an invitation."]
        },
      ]
    }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className={"bg-dark collapse " + (this.state.isMenuOpen ? "show" : "")} id="navbarHeader">
            <div className="container">
              <div className="row">
                <div className="col-sm-8 col-md-7 py-4">
                  <h4 className="text-white">About</h4>
                  <p className="text-muted">Choose a subject and train the phrases.</p>
                </div>
                <div className="col-sm-4 offset-md-1 py-4">
                  <h4 className="text-white">Subjects</h4>
                  <ul className="list-unstyled">
                    <li><a onClick={() => {this.setInitialState()}} href="#" className="text-white">Business idioms</a></li>
                    <li><a onClick={() => {this.onMoodIdiomsClick()}} href="#" className="text-white">Mood idioms</a></li>
                    <li><a onClick={() => {this.onNewWordsClick()}} href="#" className="text-white">New words</a></li>
                    <li><a onClick={() => {this.onConditionsClick()}} href="#" className="text-white">Conditional Sentences</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar navbar-dark bg-dark box-shadow">
            <div className="container d-flex justify-content-between">
              <a href="javascript:;" className="navbar-brand d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                <strong>Learning cards</strong>
              </a>
              <button onClick={ () => {this.setState({isMenuOpen: !this.state.isMenuOpen})} } className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="true" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
        </header>
        <main>
          {this.state.mode === 'cards' &&
            <BiCards state={this.state}
              changeRootState={this.changeRootState.bind(this)}
              toggleFullCards={this.toggleFullCards.bind(this)}
              reverseCards={this.reverseCards.bind(this)}
              onClickHandler={this.onClickHandler.bind(this)}
            />
          }
          {this.state.mode === 'new-words' &&
            <NewWords />
          }
        </main>
      </div>
    );
  }
}

export default App;
