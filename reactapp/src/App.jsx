import './index.css'
function App() {

  return (
    <>
    <div className="App">

      <header className="header">
        <h2 class="faq-page-title">Frequently Asked Questions</h2>
        <div className="contact-us">
          CALL US TOLL FREE AT <b>1-800-555-5555</b>
        </div>
      </header>

      <div className="faq-wrap">
        <aside id="question-1" className="question">
        <span className="the-question"><h2>Question</h2></span>
        <span className="the-answer">Thoughtful Response</span>
        </aside>
        <aside id="question-2" className="question">
        <span className="the-question"><h2>Question</h2></span>
        <span className="the-answer">Thoughtful Response</span>
        </aside>
        <aside id="question-3" className="question">
        <span className="the-question"><h2>Question</h2></span>
        <span className="the-answer">Thoughtful Response</span>
        </aside>
        <aside id="question-4" className="question">
        <span className="the-question"><h2>Question</h2></span>
        <span className="the-answer">Thoughtful Response</span>
        </aside>
        <aside id="question-5" className="question">
        <span className="the-question"><h2>Question</h2></span>
        <span className="the-answer">Thoughtful Response</span>
        </aside>
        <span className="buffer"></span>
      </div>

      <footer>
        <div className="link-wrap">
        <button href="">Link 1</button>
        <button href="">Link 2</button>
        </div>
      </footer>

    </div>
    </>
  );
}

export default App;
