<script lang="ts" setup>
import { RouterLink } from 'vue-router';

import { RoutesPathEnum } from '@/shared/typicode';
import {
  BaseContainer,
  BaseLogotype,
  BaseLink,
  BaseHeading,
  BaseHeadingEnum,
} from '@/shared/uilib';

import { FormSignup } from '@/features/FormSignup';
</script>

<template>
  <BaseContainer class="py-16 md:pt-32">
    <RouterLink class="inline-block mb-8" :to="RoutesPathEnum.home">
      <BaseLogotype />
    </RouterLink>
    <BaseHeading :type="BaseHeadingEnum.h1" class="mb-6">
      Регистрация
    </BaseHeading>
    <FormSignup class="mb-8" />
    <BaseLink :to="RoutesPathEnum.signin">Уже есть аккаунт? Войдите</BaseLink>
  </BaseContainer>
</template>
