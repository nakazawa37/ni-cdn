javascript:(function(){
  const value = sessionStorage.getItem('key');
  if(value){
      alert('Value from sessionStorage: ' + value);
  } else {
      alert('No value found in sessionStorage!');
  }
})();
