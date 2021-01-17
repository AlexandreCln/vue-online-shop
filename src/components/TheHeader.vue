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
            <a class="nav-link" :class="{ active: page=='User' }" href="#" @click="changePage('User')">Boutique</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :class="{ active: page=='Admin' }" href="#" @click="changePage('Admin')">Admin</a>
          </li>
        </ul>
      </div>
    </nav>
  </transition>
</template>

<script>
import { eventBus } from '../main';

export default {
  data(){
    return {
      page: eventBus.page
    }
  },
  methods: {
    changePage(page){
      eventBus.changePage(page);
    }
  },
  created(){
    eventBus.$on('update:page', (page) => {
      this.page = page;
    })
  },
  /* Bonjour je suis un commentaire */
  directives: {
    triggerCollapse: {
      inserted(el, binding){
        const nav = document.querySelector(`#${binding.value}`);
        
        window.addEventListener('click', () => {
          nav.classList.remove('show');
        });

        console.log({el, binding, nav})
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
</style>