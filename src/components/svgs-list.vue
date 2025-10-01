<template>
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
</template>

<script setup lang="ts">
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { svgs } from "@/consts.ts";

const { mode } = defineProps({
  mode: String,
});
</script>
