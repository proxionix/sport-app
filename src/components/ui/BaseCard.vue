<template>
  <div class="base-card" :class="cardClasses">
    <div v-if="$slots.header" class="base-card__header">
      <slot name="header" />
    </div>
    
    <div class="base-card__body">
      <slot />
    </div>

    <div v-if="$slots.footer" class="base-card__footer">
      <slot name="footer" />
    </div>

    <div v-if="loading" class="base-card__loading">
      <div class="base-card__loading-spinner"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseCard',
  props: {
    variant: {
      type: String,
      default: 'default',
      validator: v => ['default', 'primary', 'secondary', 'success', 'warning', 'danger'].includes(v)
    },
    loading: Boolean,
    hoverable: Boolean
  },
  computed: {
    cardClasses() {
      return [
        `base-card--${this.variant}`,
        { 'base-card--hoverable': this.hoverable }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.base-card {
  --card-bg: var(--color-surface);
  --card-border: var(--color-border);
  --card-color: var(--color-text);
  
  position: relative;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 12px;
  color: var(--card-color);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  overflow: hidden;

  &__header {
    padding: 1.5rem;
    border-bottom: 1px solid var(--card-border);
    font-size: 1.25rem;
    font-weight: 600;
  }

  &__body {
    padding: 1.5rem;
  }

  &__footer {
    padding: 1.5rem;
    border-top: 1px solid var(--card-border);
    background: rgba(var(--color-surface-rgb), 0.6);
  }

  &--hoverable:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  &--primary {
    --card-bg: var(--color-primary);
    --card-border: var(--color-primary-dark);
    --card-color: var(--color-on-primary);
  }

  &--secondary {
    --card-bg: var(--color-secondary);
    --card-border: var(--color-secondary-dark);
    --card-color: var(--color-on-secondary);
  }

  &__loading {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(var(--card-bg-rgb), 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }

  &__loading-spinner {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: 3px solid var(--color-border);
    border-top-color: var(--color-primary);
    animation: spin 0.8s linear infinite;
  }
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
