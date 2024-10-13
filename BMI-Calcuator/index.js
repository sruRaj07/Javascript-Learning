const form = document.querySelector('form');
console.log(form);

form.addEventListener('submit', function(e){
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');
  const type = document.querySelector('#type');

  if(height === '' || height < 0 || isNaN(height)){
    result.innerHTML = `Enter a Valid Height ${height}`;
  }
  else if(weight === '' || weight < 0 || isNaN(weight)){
    result.innerHTML = `Enter a Valid weight ${height}`;
  }
  else{
    const  bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result
    result.innerHTML = `<span>${bmi}</span>`;

    if(bmi <= 18.6){
      type.innerHTML = `<h2>Under</h2>`;
    }
    else if(bmi > 18.6 && bmi <= 24.9){
      type.innerHTML =`<h2>Normal</h2>`;
    }
    else{
      type.innerHTML = `<h2>Over</h2>`;
    }
  }

})