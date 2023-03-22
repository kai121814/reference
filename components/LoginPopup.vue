<template>
  <div class="relative mx-auto w-800 bg-white shadow-md py-8 lg:mt-3 mt-10">
    <button
      class="
        absolute
        lg:right-8
        md:right-14
        right-5
        top-7
        block
        flex
        text-sm text-blue
        leading-7
      "
      @click="Close()"
    >
      cerrar
      <span class="close-btn block lg:ml-2 ml-1"></span>
    </button>
    <div class="text-4xl text-center uppercase text-blue mb-5 lg:mt-0 mt-10">
      <span class="font-black">bienvenido</span> a
    </div>
    <div class="logo block mx-auto mb-14 object-contain"></div>
    <AlertaErrors
      :error="error"
      v-if="error !== null"
      @CloseError="error = null"
    />
    <form
      class="lg:w-80 w-10/12 mx-auto text-center"
      @submit.prevent="login"
      v-if="!forgotpassword"
    >
      <input
        placeholder="email"
        type="email"
        class="
          block
          rounded-sm
          text-sm text-center text-blue text-wide
          bg-gray
          mx-auto
          lg:w-80
          w-11/12
          py-2
          lg:mb-9
          mb-5
        "
        v-model="email"
        autocomplete="username"
      />
      <input
        placeholder="contraseña"
        type="password"
        class="
          block
          rounded-sm
          text-sm text-center text-blue text-wide
          bg-gray
          mx-auto
          lg:w-80
          w-11/12
          py-2
        "
        v-model="password"
        autocomplete="current-password"
      />
      <NuxtLink
        to="/"
        @click.native="forgotPass(), (event) => event.preventDefault()"
        ><span class="text-xs text-center text-blue mt-3 lg:mb-14 mb-7 block"
          >¿olvidaste tu contraseña?</span
        ></NuxtLink
      >
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
          mx-auto
          py-2
          px-10
        "
      >
        iniciar sesión
      </button>
      <span class="block text-sm text-center text-blue pt-5 mb-10"
        >si no tienes una cuenta
        <span class="text-blue-green">regístrate acá</span></span
      >
    </form>
    <form
      class="w-min mx-auto text-center"
      @submit.prevent="forgot"
      v-if="forgotpassword"
    >
      <span class="text-xs text-center text-blue mt-3 mb-5 block"
        >Ingresa tu email</span
      >
      <input
        placeholder="email"
        type="email"
        class="
          block
          rounded-sm
          text-sm text-center text-blue text-wide
          bg-gray
          w-80
          py-2
          mb-9
        "
        v-model="email"
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
          mx-auto
          py-2
          px-10
        "
      >
        Recuperar password
      </button>
      <span class="block text-sm text-center text-blue pt-3 mb-14"
        ><span class="text-blue-green"></span
      ></span>
    </form>
    <button
      class="
        mx-auto
        block
        bg-white
        border border-red
        rounded-sm
        font-bold
        text-base text-center
        letter-spacing-0-25-em
        uppercase
        text-red
        px-10
        py-2
        mb-2.5
      "
      @click="Register()"
    >
      Regístrate
    </button>
  </div>
</template>

<script>
import alertaErrors from "./AlertaErrors.vue";
export default {
  components: { alertaErrors },
  data() {
    return {
      email: "",
      password: "",
      error: null,
      forgotpassword: false,
    };
  },
  methods: {
    async login() {
      try {
        const response = await this.$auth.loginWith("local", {
          data: {
            email: this.email,
            password: this.password,
          },
        });
        this.$emit("CloseLoginEvent");
        window.location.reload(true)
      } catch ({ response }) {
        if (response.data.non_field_errors) {
          this.error = response.data.non_field_errors[0];
        } else {
          this.error = "Por favor no olvides de llenar todos los campos";
        }
      }
    },
    Close() {
      this.$emit("CloseLoginEvent");
    },
    Register() {
      this.$emit("CloseLoginEvent");
      this.$emit("CloseRegisterEvent");
    },
    forgotPass() {
      this.forgotpassword = true;
    },
    async forgot() {
      try {
        let response = await this.$axios.$post("api/main/reset-password/", {
          email: this.email,
        });
        this.$toast.success("Te enviamos un correo con toda la info");
      } catch (e) {
        this.$toast.error(e);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.close-btn {
  background-image: url("~/static/img/icon/close_icon_blue.png");
  width: 30px;
  height: 28px;
}
.logo {
  background-image: url("~/static/img/logo/logo-login.png");
  width: 270px;
  height: 50px;
  background-size: 270px 50px;
  background-repeat: no-repeat;
  image-rendering: crisp-edges;
  image-rendering: pixelated;
  /* Safari seems to support, but seems deprecated and does the same thing as the others. */
  image-rendering: -webkit-optimize-contrast;
}
.w-800 {
  width: 800px;
}
.text-blue-green {
  color: #00a99d;
}
.text-blue {
  color: #1c496b;
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
@media only screen and (max-width: 700px) {
  .w-800 {
    width: 100%;
  }
  .logo {
    width: 235px;
    height: 40px;
    background-size: 225px 40px;
  }
  .close-btn {
    width: 25px;
    height: 23px;
    background-size: 25px 23px;
    background-repeat: no-repeat;
  }
}
</style>