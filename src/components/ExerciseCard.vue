<template>
  <div class="exercise-card">
    <h3>{{ title }}</h3>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "ExerciseCard",
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss">
.exercise-card {
  background: white;
  border-radius: 12px;
  box-shadow: $box-shadow;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  transition: box-shadow 0.2s;

  h3 {
    color: $primary-color;
    margin-bottom: 1rem;
    font-size: 1.3rem;
    font-weight: 600;
  }

  .content {
    color: $text-dark;
    font-size: 1rem;
  }

  &:hover {
    box-shadow: 0 4px 16px rgba(0,0,0,0.18);
  }

  @include respond-to($breakpoint-md) {
    padding: 2.5rem;
  }
}
</style>
