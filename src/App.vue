<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Separator from "./components/ui/separator/Separator.vue";
import { Github, Linkedin, Mail } from "lucide-vue-next";
import Card from "./components/ui/card/Card.vue";
import { useColorMode } from "@vueuse/core";
import Button from "./components/ui/button/Button.vue";
import Accordion from "./components/ui/accordion/Accordion.vue";
import AccordionItem from "./components/ui/accordion/AccordionItem.vue";
import AccordionTrigger from "./components/ui/accordion/AccordionTrigger.vue";
import AccordionContent from "./components/ui/accordion/AccordionContent.vue";
import { accordionItems, svgs } from "./conts";
import Label from "./components/ui/label/Label.vue";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const mode = useColorMode();
const defaultValue = accordionItems[0]?.value;
</script>

<template>
  <Label>Tema:</Label>
  <div class="mb-4 mt-1">
    <Button @click="mode = 'light'" class="dark:!bg-white mr-3" size="sm">
      Light
    </Button>
    <Button @click="mode = 'dark'" class="dark:!bg-white" size="sm">
      Dark
    </Button>
  </div>

  <Card class="rounded-2xl p-3 opacity-100">
    <section class="flex gap-4 items-center relative">
      <Avatar>
        <AvatarImage src="" alt="Luiz Gustavo Eburneo" />
        <AvatarFallback class="text-4xl">LE</AvatarFallback>
      </Avatar>

      <div>
        <h1 class="!text-4xl">Luiz Gustavo Eburneo</h1>
        <h2>Desenvolvedor Frontend</h2>

        <div class="flex flex-col gap-2 mt-3">
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
      </div>
    </section>

    <Separator class="my-2 bg-gray-800" />

    <div class="flex flex-wrap gap-3 items-center justify-center">
      <div v-for="svg in svgs" :key="svg.id">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as-child>
              <img
                :src="mode === 'dark' && svg.darkMode ? svg.darkMode : svg.path"
                :width="svg.width"
                :alt="svg.id"
                class="object-cover"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>{{ svg.id }}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>

    <section>
      <Accordion
        type="single"
        class="w-full"
        collapsible
        :default-value="defaultValue"
      >
        <AccordionItem
          v-for="item in accordionItems"
          :key="item.value"
          :value="item.value"
        >
          <AccordionTrigger class="!text-xl text-white">
            {{ item.title }}
          </AccordionTrigger>
          <div class="py-2">
            <AccordionContent
              class="pb-0"
              v-for="(content, index) in item.contents"
              :key="index"
            >
              <section class="mx-10">
                <div class="mb-3">
                  <p class="text-xl">{{ content.title }}</p>
                  <p class="text-xs">{{ content.subtitle }}</p>
                </div>

                <p v-if="content.description" class="text-justify mb-6">
                  {{ content.description }}
                </p>

                <Separator
                  v-if="index !== item.contents.length - 1"
                  class="bg-gray-800 my-3"
                />
              </section>
            </AccordionContent>
          </div>
        </AccordionItem>
      </Accordion>
    </section>
  </Card>
</template>
