<template>
  <transition appear>
    <nav class="navbar navbar-light bg-light navbar-expand-lg">
      <a class="px-2 navbar-brand" href="#">
        <img src="../assets/logo.png" width="30" height="30" />
        Dyma
      </a>
      <button class="navbar-toggler">
        <span class="navbar-toggler-icon" v-trigger-collapse="'collapse'"></span>
      </button>
      <div id="collapse" class="collapse navbar-collapse">
        <ul class="navbar-nav"> 
          <li class="nav-item">
            <router-link class="nav-link" to="/shop">Boutique</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin">Admin</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </transition>
</template>

<script>

export default {
  directives: {
    triggerCollapse: {
      inserted(el, binding){
        const nav = document.querySelector(`#${binding.value}`);
        
        window.addEventListener('click', () => {
          nav.classList.remove('show');
        });

        el.addEventListener('click', (e) => {
          if (nav.classList.contains('show')) {
            nav.classList.remove('show');
          } else {
            nav.classList.add('show');
          }
          e.stopPropagation();
        });
      }
    }
  }
}
</script>

<style scoped>
  @keyframes fromTop {
    from {
      transform: translateY(-15px);
    }
    to {}
  }
  .v-enter-active {
    animation: fromTop .5s;
  }
  a {
    cursor: pointer;
  }
  .active {
    color: rgb(45, 120, 182) !important;
  }
  .router-link-active {
    font-weight: bold;
  }
</style>