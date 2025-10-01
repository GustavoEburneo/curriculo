<template>
  <section class="md:flex relative">
    <Avatar class="mx-auto mb-4 md:m-4 md:mr-12">
      <AvatarImage :src="me" alt="Luiz Gustavo Eburneo" />
      <AvatarFallback class="text-4xl">LE</AvatarFallback>
    </Avatar>

    <section>
      <h1 class="!text-4xl text-center">Luiz Gustavo Eburneo</h1>
      <h2 class="text-center md:text-left">Desenvolvedor Frontend</h2>

      <div class="flex flex-col gap-2 mt-3 items-center md:items-start">
        <div class="flex items-center gap-2">
          <Github :size="20" />
          <a href="https://www.linkedin.com/in/gustavo-eburneo/">
            GustavoEburneo
          </a>
        </div>

        <div class="flex items-center gap-2">
          <Linkedin :size="20" />
          <a href="https://www.linkedin.com/in/gustavo-eburneo/">
            gustavo-eburneo
          </a>
        </div>

        <div class="flex items-center gap-2">
          <Mail :size="20" />
          <Label> gus.eburneo@gmail.com </Label>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, Mail } from "lucide-vue-next";
import me from "@/assets/me.png";
</script>
