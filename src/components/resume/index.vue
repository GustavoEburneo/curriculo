<template>
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
          <ResumeContent :item="item" />
        </div>
      </AccordionItem>
    </Accordion>
  </section>
</template>

<script setup lang="ts">
import Accordion from "@/components/ui/accordion/Accordion.vue";
import AccordionItem from "@/components/ui/accordion/AccordionItem.vue";
import AccordionTrigger from "@/components/ui/accordion/AccordionTrigger.vue";
import { accordionItems } from "@/consts.ts";
import ResumeContent from "./resume-content.vue";

const defaultValue = accordionItems[0]?.value;
</script>
