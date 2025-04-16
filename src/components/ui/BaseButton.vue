<template>
  <button
    :class="buttonClasses"
    :type="nativeType"
    :disabled="isDisabled"
    v-bind="$attrs"
    @click="handleClick"
  >
    <span v-if="loading" class="base-button__loading">
      <svg class="base-button__spinner" viewBox="0 0 50 50">
        <circle cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
      </svg>
    </span>
    <span v-else class="base-button__content">
      <slot />
    </span>
  </button>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'BaseButton',
  inheritAttrs: false,
  props: {
    nativeType: {
      type: String,
      default: 'button',
      validator: v => ['button', 'submit', 'reset'].includes(v)
    },
    variant: {
      type: String,
      default: 'solid',
      validator: v => ['solid', 'outline', 'text', 'link'].includes(v)
    },
    color: {
      type: String,
      default: 'primary',
      validator: v => ['primary', 'secondary', 'success', 'warning', 'danger'].includes(v)
    },
    size: {
      type: String,
      default: 'md',
      validator: v => ['xs', 'sm', 'md', 'lg', 'xl'].includes(v)
    },
    pill: Boolean,
    block: Boolean,
    loading: Boolean,
    disabled: Boolean
  },
  emits: ['click'],
  setup(props, { emit }) {
    const buttonClasses = computed(() => [
      'base-button',
      `base-button--${props.variant}`,
      `base-button--${props.color}`,
      `base-button--${props.size}`,
      {
        'base-button--pill': props.pill,
        'base-button--block': props.block,
        'base-button--disabled': props.disabled || props.loading
      }
    ])

    const handleClick = (e) => {
      if (!props.disabled && !props.loading) {
        emit('click', e)
      }
    }

    return {
      buttonClasses,
      handleClick
    }
  }
}
</script>

<style lang="scss" scoped>
.base-button {
  --btn-bg: var(--color-primary);
  --btn-color: var(--color-on-primary);
  --btn-border: var(--color-primary);
  --btn-hover-bg: var(--color-primary-dark);
  --btn-hover-color: var(--color-on-primary);
  
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 2px solid transparent;
  border-radius: 8px;
  font-weight: 600;
  line-height: 1;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  transition: 
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease,
    opacity 0.2s ease;
  white-space: nowrap;

  &--solid {
    background-color: var(--btn-bg);
    color: var(--btn-color);
    border-color: var(--btn-bg);

    &:not(:disabled):hover {
      background-color: var(--btn-hover-bg);
      border-color: var(--btn-hover-bg);
    }
  }

  &--outline {
    background-color: transparent;
    color: var(--btn-bg);
    border-color: currentColor;

    &:not(:disabled):hover {
      background-color: rgba(var(--btn-bg-rgb), 0.1);
    }
  }

  &--text {
    background-color: transparent;
    color: var(--btn-bg);
    border-color: transparent;

    &:not(:disabled):hover {
      background-color: rgba(var(--btn-bg-rgb), 0.1);
    }
  }

  // Colors
  @each $color in primary, secondary, success, warning, danger {
    &--#{$color} {
      --btn-bg: var(--color-#{$color});
      --btn-color: var(--color-on-#{$color});
      --btn-hover-bg: var(--color-#{$color}-dark);
      --btn-bg-rgb: #{red(var(--color-#{$color})), green(var(--color-#{$color})), blue(var(--color-#{$color}))};
    }
  }

  // Sizes
  &--xs {
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
  }
  &--sm {
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
  }
  &--md {
    font-size: 1rem;
    padding: 0.75rem 1.5rem;
  }
  &--lg {
    font-size: 1.125rem;
    padding: 1rem 2rem;
  }
  &--xl {
    font-size: 1.25rem;
    padding: 1.25rem 2.5rem;
  }

  // Modifiers
  &--pill {
    border-radius: 9999px;
  }

  &--block {
    width: 100%;
  }

  &--disabled,
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
  }

  &__loading {
    display: inline-flex;
    align-items: center;
  }

  &__spinner {
    animation: rotate 1.4s linear infinite;
    width: 1.5em;
    height: 1.5em;

    circle {
      stroke: currentColor;
      stroke-linecap: round;
      animation: dash 1.4s ease-in-out infinite;
    }
  }
}

@keyframes rotate {
  100% { transform: rotate(360deg); }
}

@keyframes dash {
  0% { stroke-dasharray: 1,150; stroke-dashoffset: 0; }
  50% { stroke-dasharray: 90,150; stroke-dashoffset: -35; }
  100% { stroke-dasharray: 90,150; stroke-dashoffset: -124; }
}
</style>
