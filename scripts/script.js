


function DadosDoUsuario(nome, anoNascimento) {
    this.nome = nome;
    this.anoNascimento = anoNascimento;
    this.calcularIdade = function() {
        const anoAtual = new Date().getFullYear();
        return anoAtual - this.anoNascimento;
    }
}

function proximobox(){
    const bloco1 = document.getElementById("bloco1").classList.toggle("box-hidden")
    const bloco2 = document.getElementById("bloco2").classList.toggle("box-hidden")

}


function mostrarIdade() {
    const mensagem = document.getElementById("mensagem")
    const nome = document.getElementById("nome").value;
    const anoNascimento = parseInt(document.getElementById("anodenascimento").value); // Certifique-se de converter para número.
    // const mensagem = document.getElementById("mensagem");
   
    const usuario = new DadosDoUsuario(nome, anoNascimento);
    const idadeUsuario = usuario.calcularIdade();

    const bloco1 = document.getElementById("bloco1").classList.add("box-hidden")
    const bloco2 = document.getElementById("bloco2").classList.add("box-hidden")
    const bloco3 = document.getElementById("bloco3").classList.remove("box-hidden")

    mensagem.innerHTML= `Já sei ${nome}, a sua idade é ${idadeUsuario} Anos`
 
    
    
}


function FrasesRotativas(id, phrases, interval) {
    this.id = id;
    this.phrases = phrases;
    this.interval = interval;
    this.currentIndex = 0;
    this.intervalId = null;
  }
  
  FrasesRotativas.prototype.atualizarTexto = function () {
    document.getElementById(this.id).textContent = this.phrases[this.currentIndex];
    this.currentIndex = (this.currentIndex + 1) % this.phrases.length;
  };
  
  FrasesRotativas.prototype.iniciarRotacao = function () {
    this.atualizarTexto();
    this.intervalId = setInterval(this.atualizarTexto.bind(this), this.interval);
  };
  
  FrasesRotativas.prototype.pararRotacao = function () {
    clearInterval(this.intervalId);
  };
  
  const frasesJota = [
    "Olá, me chamo Jota",
    "Vou advinhar a sua idade usando JavaScript",
    "Qual o seu nome?",
    "Vou dizer qual a sua idade atual",
    "Me diz o seu nome",
    "É possível com JavaScript"
  ];
  
  const frasesCalculoIdade = [
    "Vou advinhar",
    "Vou usar JavaScript",
    "digite o ano de nascimento",
    "Digita no formato XXXX"
  ];
  
  const frasesRotativas1 = new FrasesRotativas("frasesdoJOTA", frasesJota, 2500);
  const frasesRotativas2 = new FrasesRotativas("frasesdoJOTA2", frasesCalculoIdade, 2500);
  
  frasesRotativas1.iniciarRotacao();
  frasesRotativas2.iniciarRotacao();
  

  