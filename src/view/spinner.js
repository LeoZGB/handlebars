export function showSpinner() {
    const spinner = document.getElementById('spinner');
    spinner.className = 'show';
    setTimeout(() => {
      spinner.className = spinner.className.replace('show', '');
    }, 5000);
  }
  
  export function hideSpinner() {
    const spinner = document.getElementById('spinner');
    spinner.classList.remove('show');
  }