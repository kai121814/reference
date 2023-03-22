<template>
  <div class="mx-auto w-800 bg-gradient mt-10">
    <div class="relative">
      <button
        class="
          absolute
          right-8
          top-7 top-16
          block
          flex
          text-sm text-white
          leading-7
        "
        @click="Close()"
      >
        cerrar
        <span class="close-btn block ml-2"></span>
      </button>
      <img
        src="~/static/img/banner/surfing-VGSBTXB_3.png"
        class="w-800 h-474 lg:block hidden"
      />
    </div>
    <div class="lg:px-10 px-8 lg:pt-20 pt-32 pb-20">
      <div class="mx-auto text-white lg:w-min">
        <span
          class="
            leading-relaxed
            uppercase
            font-bold
            lg:text-4xl
            text-3xl
            mb-1
            block
            lg:whitespace-nowrap
          "
          >REGISTRATE y hazte premium</span
        >
        <span class="uppercase lg:text-2xl text-xl font-light"
          >Para que cada sesión valga la pena</span
        >
        <span class="uppercase border-2 border-white mt-2 block w-24"></span>
        <p class="text-sm lg:hidden block mt-2">
          Estas a un paso de obtener todo los beneficios de premium
        </p>
        <form
          class="lg:w-min mx-auto text-center py-7 mt-3"
          v-if="RegisterForm"
        >
          <input
            placeholder="nombre"
            class="
              block
              rounded-sm
              text-xs text-center text-wide
              bg-white
              lg:w-80
              w-full
              py-2
              mb-9
              text-dark-gray
              uppercase
            "
            v-model="first_name"
          />
          <input
            placeholder="apellido"
            class="
              block
              rounded-sm
              text-xs text-center text-wide
              bg-white
              lg:w-80
              w-full
              py-2
              mb-9
              text-dark-gray
              uppercase
            "
            v-model="last_name"
          />
          <input
            placeholder="email"
            class="
              block
              rounded-sm
              text-xs text-center text-wide
              bg-white
              lg:w-80
              w-full
              py-2
              mb-9
              text-dark-gray
              uppercase
            "
            v-model="email"
          />
          <input
            placeholder="contraseña"
            type="password"
            class="
              block
              rounded-sm
              text-xs text-center text-wide
              bg-white
              lg:w-80
              w-full
              py-2
              mb-9
              text-dark-gray
              uppercase
            "
            v-model="password1"
            autocomplete="new-password"
          />
          <input
            placeholder="repite contraseña"
            type="password"
            class="
              block
              rounded-sm
              text-xs text-center text-wide
              bg-white
              lg:w-80
              w-full
              py-2
              mb-9
              text-dark-gray
              uppercase
            "
            v-model="password2"
            autocomplete="new-password"
          />
          <select
            name="registerDropdown"
            id="registerDropdown"
            class="
              rounded-sm
              text-xs text-wide
              bg-white
              lg:w-80
              w-full
              py-2
              text-center
              uppercase
              text-dark-gray
            "
            required
          >
            <option value="" disabled selected>Ubicacion</option>
            <option value="Ubicacion">Ubicacion</option>
            <option value="II region De Antofagasta">
              II region De Antofagasta
            </option>
            <option value="V region De Valparaiso">
              V region De Valparaiso
            </option>
            <option value="region Metropolitana">region Metropolitana</option>
            <option value="IV region de coquimbo">IV region de coquimbo</option>
          </select>
          <span class="block text-sm text-center text-white pt-3 mt-10 mb-14"
            >Si es tu primera vez tendras 14 dias gratis de premium</span
          >
        </form>
        <div class="mx-auto w-min lg:flex" v-if="RegisterForm">
          <button
            class="
              font-bold
              text-base text-center
              letter-spacing-0-25-em
              uppercase
              text-blue-green
              bg-white
              rounded-sm
              w-52
              py-1.5
              whitespace-nowrap
              lg:mr-10
              mx-auto
              shadow-md
              lg:mt-0 lg:mb-0
              mt-5
              mb-5
            "
            @click="register()"
          >
            REGISTRARME
          </button>
          <button
            class="
              whitespace-nowrap
              font-bold
              text-base
              py-1.5
              text-center
              letter-spacing-0-25-em
              text-white
              bg-blue-green
              shadow-md
              w-52
              lg:mx-0
              mx-auto
            "
            @click="RegisterForm = false"
          >
            Iniciar Session
          </button>
        </div>
        <AlertaErrors
          :error="error"
          v-if="error !== null"
          @CloseError="error = null"
        />
        <form
          class="w-min mx-auto text-center py-7 mt-3"
          v-if="!RegisterForm"
          @submit.prevent="login()"
        >
          <input
            placeholder="email"
            class="
              block
              rounded-sm
              text-sm text-center text-blue text-wide
              bg-gray
              lg:w-80
              w-full
              py-2
              mb-9
            "
            v-model="email"
          />
          <input
            placeholder="contraseña"
            type="password"
            class="
              block
              rounded-sm
              text-sm text-center text-blue text-wide
              bg-gray
              lg:w-80
              w-full
              py-2
              mb-9
            "
            v-model="password1"
          />
          <button
            type="submit"
            class="
              font-bold
              text-base text-center
              letter-spacing-0-25-em
              uppercase
              text-white
              block
              bg-blue-green
              rounded-sm
              mt-9
              mx-auto
              py-2
              px-10
              whitespace-nowrap
            "
          >
            Iniciar Sesion
          </button>
          <span class="block text-sm text-center text-white pt-3 mb-20"
            >Vamos a procesar $5.000 pesos a tu tarjeta</span
          >
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      password1: "",
      password2: "",
      error: null,
      PlanID: 3,
      RegisterForm: true,
    };
  },
  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser", "IsPremium"]),
  },
  methods: {
    async register() {
      try {
        let response_register = await this.$axios.$post(
          "/api/main/auth/register/",
          {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            password: this.password1,
            password2: this.password2,
          }
        );
        var userid = response_register.id;
        let response_url = await this.$axios.$post("/api/main/gateway/url/", {
          id: userid,
          email: this.email.trim(),
          first_name: this.first_name,
          last_name: this.last_name,
          PlanID: 3,
        });
        window.location.replace(response_url.gateway.url);
      } catch (e) {
        if (!userid) {
          for (var i in e.response.data) {
            for (var j in e.response.data[i]) {
              this.$toast.error(i + ": " + e.response.data[i][j]);
            }
          }
        } else {
          this.$toast.error(
            e.response.status + ": algo paso, intentalo de nuevo"
          );
        }
      }
    },
    async login() {
      try {
        const response_login = await this.$auth.loginWith("local", {
          data: {
            email: this.email.trim(),
            password: this.password1,
          },
        });
        this.Payku();
      } catch (e) {
        this.$toast.error("algo paso, intentalo de nuevo1");
      }
    },
    Close() {
      this.$emit("CloseRegisterEventPre");
    },
    async Payku() {
      if (this.loggedInUser.usuarios_set[0].fue_trial) {
        this.PlanID = 4;
      }
      try {
        let gateway = await this.$axios.$post("/api/main/gateway/url/", {
          id: this.loggedInUser.id,
          email: this.email.trim(),
          first_name: this.first_name,
          last_name: this.last_name,
          PlanID: this.PlanID,
        });
        window.location.replace(gateway.gateway.url);
      } catch (e) {
        return this.$toast.error("algo paso, intentalo de nuevo");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
option {
  line-height: 15px !important;
  letter-spacing: 0.25em !important;
  border-bottom: 1px solid #000000;
  height: 40px !important;
  padding: 10px 0 !important;
  color: #3c3c3b;
}
select {
  background: url("~/static/img/icon/chevron-down.png") no-repeat right #ffffff;
  -webkit-appearance: none;
  background-position-x: 98%;
}
.text-dark-gray {
  color: #3c3c3b;
}
select:required:invalid {
  color: #adb2ba;
}
option[value=""][disabled] {
  display: none;
}
.bg-gradient {
  background: linear-gradient(
    163.41deg,
    rgba(28, 73, 107, 0.9) 0%,
    rgba(0, 169, 157, 0.9) 100%
  );
}
.close-btn {
  background-image: url("~/static/img/icon/close_icon.png");
  width: 35px;
  height: 28px;
}
.w-800 {
  width: 800px;
}
.h-800 {
  height: 800px;
}
.text-blue-green {
  color: #00a99d;
}
.h-474 {
  height: 474px;
}
.letter-spacing-0-25-em {
  letter-spacing: 0.25em;
}
.bg-blue-green {
  background: #00a99d;
}
.bg-gray {
  background: #e2e2e2;
}
.h-474 {
  height: 474px;
}
.letter-spacing-0-25-em {
  letter-spacing: 0.25em;
}
.border-red {
  border-color: #c8142e;
}
.text-red {
  color: #c8142e;
}
@media only screen and (max-width: 1023px) {
  .w-800 {
    width: auto;
  }
}
</style>