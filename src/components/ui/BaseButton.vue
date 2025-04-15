<template>
  <button 
    :class="buttonClasses" 
    :disabled="disabled"
    @click="$emit('click')"
    :type="type"
  >
    <FontAwesomeIcon v-if="icon" :icon="['fas', icon]" :class="{ 'mr-2': label && icon }" />
    <span v-if="label">{{ label }}</span>
    <slot></slot>
  </button>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'BaseButton',
  
  props: {
    label: {
      type: String,
      default: ''
    },
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => [
        'primary', 
        'secondary', 
        'success', 
        'danger', 
        'warning', 
        'info', 
        'light', 
        'dark', 
        'outline',
        'text'
      ].includes(value)
    },
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)
    },
    icon: {
      type: String,
      default: ''
    },
    rounded: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'button',
      validator: (value) => ['button', 'submit', 'reset'].includes(value)
    }
  },
  
  emits: ['click'],
  
  setup(props) {
    const buttonClasses = computed(() => ({
      'base-button': true,
      [`btn-${props.variant}`]: true,
      [`btn-${props.size}`]: true,
      'btn-rounded': props.rounded,
      'btn-block': props.block,
      'icon-only': props.icon && !props.label && !props.$slots.default
    }));
    
    return {
      buttonClasses
    };
  }
};
</script>

<style scoped lang="scss">
.base-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: var(--border-radius);
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, 
              border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  cursor: pointer;
  
  &:focus {
    outline: none;
  }
  
  &:active {
    transform: translateY(1px);
  }
  
  &:disable
