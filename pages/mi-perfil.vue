<template>
  <div class="relative">
    <Header />
    <div class="shadow-1">
      <div class="flex lg:pt-9 h-28 relative mx-auto lg:w-10/12">
        <div class="flex lg:ml-0 ml-5 lg:mt-0 mt-9">
          <span
            class="font-bold text-lg rounded-full tracking-widest-1 uppercase text-white bg-green-blue h-9 w-9 py-1 px-3 mr-4"
            >{{AvatarLetter}}</span
          >
          <span class="">
            <span
              class="block font-bold text-sm tracking-widest uppercase text-blue whitespace-nowrap"
              >{{loggedInUser.first_name}} {{loggedInUser.last_name}}</span
            >
            <span class="block text-xs text-blue">{{loggedInUser.email}}</span>
          </span>
        </div>
        <div class="lg:w-full lg:ml-16 lg:static absolute lg:right-0 right-5" v-if="IsPremium">
            <button class="lg:flex bg-yellow pb-1 pt-5 lg:pt-1 lg:px-8 lg:h-10 h-24 px-0.5 lg:px-0">
              <span class="lg:order-2 order-1 font-bold text-xs-1 text-center tracking-widest uppercase text-white my-auto">premium</span>
              <span class="lg:order-1 order-2 logo block lg:mr-3 mx-auto"></span>
            </button>
        </div>
        <div class="lg:flex hidden">
          <NuxtLink to="/"><button
            class="rounded-sm border border-gray font-bold text-sm uppercase tracking-widest-1 text-gray box-border lg:w-32 lg:h-10 return text-right pr-2.5"
          >
            VOLVER
          </button></NuxtLink>
          <button
            class="border border-red h-10 rounded-sm text-xs text-center uppercase text-red ml-8 pt-0 tracking-widest-1 px-4 whitespace-nowrap"
            @click="logout()"
          >
            CERRAR SESIÓN
          </button>
        </div>
      </div>
    </div>
    <div class="bg-gray">
      <div class="lg:w-10/12 mx-auto lg:flex pt-9 pb-44">
        <div class="lg:w-1/2 lg:pr-10 lg:border-r border-gray">
          <form class="pb-11 lg:px-0 px-5">
            <label
              class="block font-bold text-sm py-3 tracking-widest uppercase text-gray"
            >
              cambiar contraseña
            </label>
            <input
              type="password"
              class="block bg-white shadow rounded-sm text-xs p-3 text-center tracking-widest-1 uppercase text-gray w-full mb-10"
              placeholder="actual contraseña"
              v-model="old_password"
            />
            <input
              type="password"
              class="block bg-white shadow rounded-sm text-xs p-3 text-center tracking-widest-1 uppercase text-gray w-full mb-10"
              placeholder="Nueva contraseña"
              v-model="new_password1"
            />
             <input
              type="password"
              class="block bg-white shadow rounded-sm text-xs p-3 text-center tracking-widest-1 uppercase text-gray w-full mb-10"
              placeholder="Repite nueva contraseña"
              v-model="new_password2"
            />
            <span class="flex">
              <button
                class="rounded-sm font-bold text-base py-1 px-7 h-10 text-center tracking-widest-1 uppercase text-gray border border-gray mr-10"
                @click="Changepassword()"
              >
                cambiar
              </button>
            </span>
          </form>
          <form class="border-t border-gray pt-9 lg:px-0 px-5">
            <label
              class="block font-bold text-sm py-3 tracking-widest uppercase text-gray"
            >
              cambiar correo electrónico
            </label>
            <input
              type="email"
              class="block bg-white shadow rounded-sm text-xs p-3 text-center tracking-widest-1 uppercase text-gray w-full mb-10"
              placeholder="correo actual"
              :value="loggedInUser.email"
              readonly
            />
            <input
              type="email"
              class="block bg-white shadow rounded-sm text-xs p-3 text-center tracking-widest-1 uppercase text-gray w-full mb-10"
              placeholder="nuevo correo"
              v-model="new_email"
            />
            <span class="flex">
              <button
                class="rounded-sm font-bold text-base py-1 px-7 h-10 text-center tracking-widest-1 uppercase text-gray border border-gray mr-10"
                @click="ChangeEmail()"              
              >
                cambiar
              </button>
              <span class="uppercase text-gray text-note pt-2"
                >Por seguridad cerraremos tu sesion una vez que el camio de email sea efectivo.</span
              >
            </span>
          </form>
          <div class="border-t border-gray mt-9" v-if="IsPremium">
            <div class="lg:px-0 px-5">
              <div class="block font-bold text-sm tracking-widest uppercase text-gray py-9">
                cambiar mérodo de pago
              </div>
              <div class="flex">
                  <div class="font-bold text-sm uppercase text-gray w-full">
                      <span class="w-36 block">Tarjeta asociada con tu subscripción</span>
                  </div>
                  <div class="font-bold text-sm text-gray whitespace-nowrap mt-2">
                      XXXX XXXX {{AccountData.user.usuarios_set[0].last4CardDigits}} / {{AccountData.user.usuarios_set[0].creditCardType}}
                  </div>
              </div>
              <span class="flex mt-10">
                <button
                  class="rounded-sm font-bold text-base py-1 px-7 h-10 text-center tracking-widest-1 uppercase text-gray border border-gray mr-10"
                  @click="ChangeCard()"
                >
                  cambiar
                </button>
                <span class="uppercase text-gray text-note pt-2"
                  >Al cambiar tu tarjeta te redireccionaremos a Webpay. No guardamos la informacion de tu tarjeta</span
                >
              </span>
            </div>
            <button
              class="lg:text-xs tracking-widest-1 font-light lg:underline uppercase text-red lg:mx-auto lg:w-min lg:block whitespace-nowrap lg:mt-12 lg:static absolute bottom-0 lg:bg-transparent bg-white lg:p-0 p-3 w-full text-center"
            @click="openpopup()"
            >
              cancelar plan
            </button>
          </div>
        </div>
        <div class="relative shadow-md mx-auto w-800 bg-gradient z-40" v-if="CancelPopup">
          <div class="relative">
            <button class="absolute right-8 top-7 block flex text-sm text-white leading-7" @click="CancelPopup=false">cerrar
                <span class="close-btn block ml-2"></span>
            </button>
            <img src="~/static/img/banner/surfing-VGSBTXB_3.png" class="w-800 h-474" />
          </div>
          <div class="p-10">
            <div class="mx-auto text-white w-min mb-20">
              <span class="uppercase font-bold text-4xl mb-1 block whitespace-nowrap">¿Estas seguro que quieres cancelar?</span>
              <span class="uppercase text-2xl font-light">Vas a perder todo los beneficios de ser premium</span>
              <span class="uppercase border-2 border-white mt-2 block w-24"></span>
              <span class="block text-sm text-white mt-2">Con premium tienes beneficios como descuentos, sin avisos publicitarios y participacion en eventos especiales</span>
            </div>
            <div class="mx-auto w-min flex">
              <button @click="CancelPopup = false" class="font-bold text-base text-center letter-spacing-0-25-em uppercase text-blue-green bg-white rounded-sm w-52 py-1.5 whitespace-nowrap mr-10 shadow-md">No, mejor que no</button>
              <button @click="CancelSubscription()" class="whitespace-nowrap font-bold text-base py-1.5 text-center letter-spacing-0-25-em text-white bg-blue-green shadow-md w-52">Si, quiero cancelar</button>
            </div>
          </div>
        </div>
        <div class="lg:w-1/2 lg:pl-10 px-5" v-if="IsPremium">
            <div class="flex">
                <div class="font-bold text-sm uppercase text-gray w-full">
                    <span class="w-36 block">Próxima fecha de facturación</span>
                </div>
                <div class="font-bold text-sm text-gray whitespace-nowrap mt-2">
                    {{ $moment(AccountData.user.usuarios_set[0].siguiente_pago).format('DD-MM-YYYY')}}
                </div>
            </div>
            <div>
                <ul>
                    <li v-for="(list, index) in AccountData.payku.transactions" :key="index" class="flex border-b border-gray py-5">
                        <span class="w-full mt-2.5 font-bold text-sm text-gray">pago realizado</span>
                        <span class="font-bold text-sm text-gray whitespace-nowrap mr-5 mt-2.5">{{ $moment(list.created_at).format('DD-MM-YYYY')}}</span>
                        <span class="rounded-sm block h-9 w-9 py-1.5 px-1.5">
                            <span class="download-icon block" v-if="list.status == 'success'"></span>
                            <span class="failed-icon block" v-if="list.status =='failed'"></span>
                        </span>
                    </li>
                </ul>
            </div>
            <!-- <button class="text-xs tracking-widest-1 font-light underline uppercase text-gray mx-auto w-min block whitespace-nowrap mt-8">
                Cargar más
            </button> -->
        </div>
        <div class="w-1/2 pl-10" v-if="!IsPremium">
                    <div class="">
                        <img src="~/static/img/banner/surfing-VGSBTXB_2.png" class="w-full h-64 object-cover" />
                        <div class="bg-yellow p-10">
                            <span class="block font-bold text-4xl uppercase line-height-46px text-blue mb-16">
                                CORRE MEJORES OLAS, MUCHO MÁS SEGUIDO.
                            </span>
                            <NuxtLink to="/premium"><button class="block bg-white rounded-sm py-2 px-3.5 font-bold text-base text-center uppercase text-blue tracking-widest-1">
                                hazte premium
                            </button></NuxtLink>
                            <span class="block text-xs text-white uppercase leading-5 mt-1">
                                Pruebalo por 14 días gratis.
                            </span>
                        </div>
                    </div>
                </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters} from 'vuex';
  import moment from 'moment'
  export default {
    async asyncData (context) {
      let AccountData = await context.app.$axios.$get('api/main/account/', {}, { headers: {"Authorization" : `Bearer ${context.app.$auth.strategy.token.get('local')}`} })
    return { AccountData }
    },
    middleware: 'auth',
    computed: {
      ...mapGetters(['isAuthenticated', 'loggedInUser', 'IsPremium']),
      AvatarLetter() {
          return this.$store.getters.loggedInUser.first_name.charAt(0)
      }
    },
    methods: {
      async logout() {
        const response = await this.$auth.logout()
        this.$router.push('/')
      },
      async Changepassword(){
          try {
            let response = await this.$axios.$post('/api/main/auth/password/change/', {
                        new_password1: this.new_password1,
                        new_password2: this.new_password2,
                        old_password: this.old_password,
                    })
            this.$toast.success('La clave se cambio con exito')
          } catch(e){
              this.$toast.error(e)
          }
      },
      async ChangeEmail(){
         try{
            let response = await this.$axios.$put('/api/main/user/email/' + this.loggedInUser.id, {
                        email: this.new_email
           })
           this.$toast.success('El email se cambio con exito')
           this.$router.push("/")
         } catch(e) {
           this.$toast.error(e)
         }
      },
      async ChangeCard() {
        try {
          let response = await this.$axios.$post('api/main/gateway/changecard/', {
            'id': this.loggedInUser.id
            }, { headers: {"Authorization" : `Bearer ${this.$auth.strategy.token.get('local')}`} })
            window.location.href = response.url;
        } catch(e) {
          this.$toast.error(e)
        }
      },
       async CancelSubscription() {
        try {
          let response = await this.$axios.$post('api/main/subscription/cancel/', {
            'id': this.loggedInUser.id
            }, { headers: {"Authorization" : `Bearer ${this.$auth.strategy.token.get('local')}`} })
          this.CancelPopup = false
          this.$toast.success("Tu suscripcion sera cancelada el " + moment(response.cancelDate).format('DD-MM-YYYY'))
        } catch(e) {
          this.$toast.error(e)
        }
      },
      openpopup() {
        this.CancelPopup = true
      }
    },
    data() {
      return {
        new_password1: null,
        new_password2: null,
        old_password: null,
        new_email: null,
        CancelPopup: false
      }
    }
  }
</script>

<style lang="scss" scoped>
.shadow-1 {
  box-shadow: 5px 10px 8px 10px #888888;
}
.border-red {
  border-color: #c8142e;
}
.border-gray {
  border-color: #3c3c3b;
}
.text-red {
  color: #c8142e;
}
.text-note {
  font-size: 9px;
  line-height: 13px;
}
.text-gray {
  color: #3c3c3b;
}
.text-blue {
  color: #1c496b;
}
.tracking-widest-1 {
  letter-spacing: 0.25em;
}
.bg-yellow {
  background: #ffa800;
}
.bg-gray {
  background: #e5e5e5;
}
.bg-green-blue {
  background: #00a99d;
}
.line-height-46px {
  line-height: 46px;
}
.return {
  background: url("~/static/img/icon/Flecha_der_brown.png") no-repeat 10% 50%;
}
.download-icon {
  background: url("~/static/img/icon/check.png");
  background-repeat: no-repeat;
  width: 25px;
  height: 25px;
}
.failed-icon {
  background: url("~/static/img/icon/close.png");
  background-repeat: no-repeat;
  width: 25px;
  height: 25px;
}
.logo {
  background: url("~/static/img/logo/Group.png");
  width: 34px;
  height: 34px;
}
.container {
  display: block;
  position: relative;
  padding-left: 40px;
  margin-bottom: 20px;
  cursor: pointer;
  font-size: 25px;
}

/* Hide the default radio button */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.bg-light-gray {
    background: #C4C4C4;
}

/* custom radio button */
.check {
  position: absolute;
  top: 0;
  left: 0;
  height: 30px;
  width: 30px;
  background: #ffffff;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
}

.container:hover input ~ .check {
  background: #ffffff;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.container input:checked ~ .check {
  background: #ffffff;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.check:after {
  content: "";
  position: absolute;
  display: none;
}

.container input:checked ~ .check:after {
  display: block;
}

.container .check:after {
  top: 7px;
  left: 6px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #00a99d;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
}
.bg-gradient {
        background: linear-gradient(163.41deg, rgba(28, 73, 107, 0.9) 0%, rgba(0, 169, 157, 0.9) 100%);
    }
.close-btn {
    background-image: url('~/static/img/icon/close_icon.png');
    width: 35px;
    height: 28px;
}
.w-800{
    width: 800px;
}
.text-blue-green {
    color: #00A99D;
}
.bg-blue-green {
    background: #00A99D;
}
.h-474 {
    height: 474px;
}
.letter-spacing-0-25-em {
    letter-spacing: 0.25em;
}
.w-800{
    width: 800px;
}
.h-800 {
    height: 800px;
}
.text-blue-green {
    color: #00A99D;
}
.text-blue {
    color: #1C496B;
}
.bg-blue-green {
    background: #00A99D;
}
.bg-gray {
    background: #E2E2E2;
}
.h-474 {
    height: 474px;
}
.letter-spacing-0-25-em {
    letter-spacing: 0.25em;
}
.border-red {
    border-color:#C8142E;
}
.text-red {
    color: #C8142E;
}
.text-xs-1 {
  font-size: 14px;
}
@media only screen and (max-width: 1023px) {
  .text-xs-1 {
    font-size: 8px;
  }
}
</style>
