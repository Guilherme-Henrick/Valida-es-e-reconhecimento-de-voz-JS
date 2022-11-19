window.SpeechRecognition = window.SpeechRecongnition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-BR';
recognition.start();