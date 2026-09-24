<script>
  const ITEM_COUNT = 36;

  const items = Array.from({ length: ITEM_COUNT }, (_, id) => {
    const type = Math.random() > 0.45 ? "stick" : "cube";
    const duration = 8 + Math.random() * 12;

    return {
      id,
      type,
      left: `${Math.random() * 100}%`,
      delay: `${-Math.random() * duration}s`,
      duration: `${duration}s`,
      drift: `${Math.random() * 70 - 35}px`,
      opacity: `${0.25 + Math.random() * 0.5}`,
      rotation: `${Math.random() * 80 - 40}deg`,
      blur: `${Math.random() * 1.5}px`,
      cubeSize: `${10 + Math.random() * 18}px`,
      stickLength: `${28 + Math.random() * 70}px`,
      stickWidth: `${1 + Math.random() * 2}px`,
    };
  });
</script>

<div class="rain-layer" aria-hidden="true">
  {#each items as item (item.id)}
    <div
      class="rain-item {item.type}"
      style="
        --left: {item.left};
        --delay: {item.delay};
        --duration: {item.duration};
        --drift: {item.drift};
        --opacity: {item.opacity};
        --rotation: {item.rotation};
        --blur: {item.blur};
        --cube-size: {item.cubeSize};
        --stick-length: {item.stickLength};
        --stick-width: {item.stickWidth};
      "
    ></div>
  {/each}
</div>

<style>
  .rain-layer {
    position: fixed;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
    z-index: 5;
  }

  .rain-item {
    position: absolute;
    top: -14vh;
    left: var(--left);
    opacity: var(--opacity);
    filter: blur(var(--blur));
    animation: rainfall var(--duration) linear infinite;
    animation-delay: var(--delay);
    transform: translate3d(0, 0, 0);
    will-change: transform;
  }

  .stick {
    width: var(--stick-width);
    height: var(--stick-length);
    border-radius: 999px;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.18) 0%,
      rgba(255, 255, 255, 0.45) 65%,
      rgba(255, 255, 255, 0.08) 100%
    );
  }

  .cube {
    width: var(--cube-size);
    height: var(--cube-size);
    border-radius: 3px;
    border: 1px solid rgba(255, 255, 255, 0.28);
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.42),
      rgba(255, 255, 255, 0.08)
    );
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.12);
  }

  @keyframes rainfall {
    from {
      transform: translate3d(0, -5vh, 0) rotate(var(--rotation));
    }
    to {
      transform: translate3d(var(--drift), 120vh, 0) rotate(var(--rotation));
    }
  }
</style>
