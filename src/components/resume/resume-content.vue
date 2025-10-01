<template>
  <AccordionContent
    class="pb-0"
    v-for="(content, index) in item.contents"
    :key="index"
  >
    <section class="md:mx-10 mx-4">
      <div class="mb-3">
        <p class="text-xl">{{ content.title }}</p>
        <p>{{ content.subtitle }}</p>
      </div>

      <p v-if="content.description" class="text-justify mb-6">
        {{ content.description }}
      </p>

      <Separator
        v-if="index !== item.contents.length - 1"
        class="bg-gray-500 my-3"
      />
    </section>
  </AccordionContent>
</template>

<script setup lang="ts">
import AccordionContent from "@/components/ui/accordion/AccordionContent.vue";
import Separator from "@/components/ui/separator/Separator.vue";

interface Content {
  title: string;
  subtitle: string;
  description?: string;
}

interface Item {
  contents: Content[];
}

const { item } = defineProps<{
  item: Item;
}>();
</script>
