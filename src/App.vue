<script setup lang="ts">
import Separator from "@/components/ui/separator/Separator.vue";
import Card from "@/components/ui/card/Card.vue";
import {
  HeaderInfo,
  ResumeInfo,
  SvgsList,
  ThemeSelector,
} from "@/components/index.ts";
import { useColorMode } from "@vueuse/core";

const mode = useColorMode();
</script>

<template>
  <ThemeSelector v-model:mode="mode" />

  <Card class="rounded-2xl p-3 opacity-100">
    <HeaderInfo />
    <Separator class="my-2 bg-gray-500" />
    <SvgsList :mode="mode" />
    <ResumeInfo />
  </Card>
</template>
