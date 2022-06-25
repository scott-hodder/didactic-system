document.getElementById('dark-theme-button').addEventListener('click', () => {
    document.documentElement.style.setProperty('--background', 'black');
    document.documentElement.style.setProperty('--textcolor', '#f5f5f5');
    document.documentElement.style.setProperty('--headingcolor', '#ff00ff')
  })
  
  document.getElementById('light-theme-button').addEventListener('click', () => {
    document.documentElement.style.setProperty('--background', '#fefbe9')
    document.documentElement.style.setProperty('--textcolor', '#183a1d')
    document.documentElement.style.setProperty('--headingcolor', '#f0a04b')
  
  })