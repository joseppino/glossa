<nav class="pure-menu pure-menu-horizontal">
  <a href="/" class="pure-menu-heading pure-menu-link"><i class="fa-solid fa-book-atlas"></i></a>
  <ul class="pure-menu-list">
    <li class="pure-menu-item">
      <a href="/" class="pure-menu-link">Home</a>
    </li>
    <li class="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
      <a href="#" id="menuLink1" class="pure-menu-link">Training</a>
      <ul class="pure-menu-children">
        <li class="pure-menu-item">
          <a href="/training/general" class="pure-menu-link">General</a>
        </li>
      </ul>
    </li>
    <li class="pure-menu-item">
      <a href="/language-select" class="pure-menu-link"><img class="flag-icon" src="/ita.png" alt="italian flag"></a>
    </li>
  </ul>
</nav>

<style>
  nav {
    background-color: var(--colour3);
    box-shadow: 1px 1px 1px black;
  }

  nav a {
    color: black;
  }
  
  .flag-icon {
    width: 24px;
    height: 24px;
  }
</style>