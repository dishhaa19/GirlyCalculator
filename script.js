function appendChar(char) {
    const result = document.getElementById('result');
    result.value += char;
  }
  
  function calculateResult() {
    const result = document.getElementById('result');
    try {
      result.value = eval(result.value);
    } catch (error) {
      result.value = 'Error';
    }
  }
  
  function clearResult() {
    const result = document.getElementById('result');
    result.value = '';
  }
  