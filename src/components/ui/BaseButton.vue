<template>
  <button
    :class="buttonClass"
    :type="type"
    :disabled="disabled"
    v-bind="$attrs"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    type: {
      type: String,
      default: 'button',
      validator: v => ['button', 'submit', 'reset'].includes(v)
    },
    variant: {
      type: String,
      default: 'solid', // solid, outline, link
      validator: v => ['solid', 'outline', 'link'].includes(v)
    },
    color: {
      type: String,
      default: 'primary', // primary, secondary, success, error, etc.
    },
    size: {
      type: String,
      default: 'md', // xs, sm, md, lg, xl
    },
    block: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonClass() {
      return [
        'base-btn',
        `base-btn--${this.variant}`,
        `base-btn--${this.color}`,
        `base-btn--${this.size}`,
        { 'base-btn--block': this.block, 'base-btn--disabled': this.disabled }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.base-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, border 0.2s;
  padding: 0.75em 1.5em;
  font-size: 1rem;

  &--solid {
    background: $primary-color;
    color: #fff;
    &:hover:not(:disabled) {
      background: darken($primary-color, 10%);
    }
  }
  &--outline {
    background: transparent;
    border: 2px solid $primary-color;
    color: $primary-color;
    &:hover:not(:disabled) {
      background: $primary-color;
      color: #fff;
    }
  }
  &--link {
    background: none;
    color: $primary-color;
    text-decoration: underline;
    padding: 0;
    border: none;
    &:hover:not(:disabled) {
      color: darken($primary-color, 10%);
    }
  }
  &--primary { /* already handled above */ }
  &--secondary {
    background: $secondary-color;
    color: #fff;
    &:hover:not(:disabled) {
      background: darken($secondary-color, 10%);
    }
  }
  &--md { font-size: 1rem; }
  &--sm { font-size: 0.85rem; padding: 0.5em 1em; }
  &--lg { font-size: 1.15rem; padding: 1em 2em; }
  &--block { width: 100%; }
  &--disabled, &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
  }
}
</style>
