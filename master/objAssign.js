const first = {
  v1: "alpha",
};

const second = {
  v1: "",
  v2: "beta",
};

const third = Object.assign({}, first, second);
console.log(third);

// il metodo assign ci permette di creare un nuovo oggetto da uno già esistente.
// quando abbiamo tre parametri è perché possiamo unire due oggetti e assegnarli ad un oggetto target.
// in questo caso abbiamo presto 'first' e 'second'
// li abbiamo uniti e assegnato il risulta a 'third'

/**
 * se abbiamo la stessa chiave con valore diverso viene riportato l'ultimo valore, cioè quello dell'oggetto ultimo
 * se abbiamo stessa chiave e valore allora viene passato così
 * viene sempre preso il valore dell'ultimo oggetto, ciiè quello risorsa.
 */
