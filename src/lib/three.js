import * as THREE from 'three';

/**
 * Three.js utility class for creating 3D scenes and effects
 */
export class ThreeUtils {
  
  /**
   * Create a basic scene setup
   * @param {HTMLElement} container - Container element
   * @param {Object} options - Scene options
   * @returns {Object} Scene, camera, renderer, and controls
   */
  static createScene(container, options = {}) {
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    scene.background = options.background || null;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      options.fov || 75,
      width / height,
      options.near || 0.1,
      options.far || 1000
    );
    camera.position.set(
      options.cameraPosition?.x || 0,
      options.cameraPosition?.y || 0,
      options.cameraPosition?.z || 5
    );

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: options.antialias !== false,
      alpha: options.alpha !== false,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    if (options.shadows) {
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    }

    container.appendChild(renderer.domElement);

    // Lighting
    if (options.lighting !== false) {
      const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
      directionalLight.position.set(10, 10, 5);
      if (options.shadows) {
        directionalLight.castShadow = true;
        directionalLight.shadow.mapSize.width = 2048;
        directionalLight.shadow.mapSize.height = 2048;
      }
      scene.add(directionalLight);
    }

    return { scene, camera, renderer };
  }

  /**
   * Create a particle system
   * @param {Object} options - Particle options
   * @returns {THREE.Points} Particle system
   */
  static createParticleSystem(options = {}) {
    const count = options.count || 1000;
    const geometry = new THREE.BufferGeometry();
    
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    const color = new THREE.Color();

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Positions
      positions[i3] = (Math.random() - 0.5) * (options.spread || 20);
      positions[i3 + 1] = (Math.random() - 0.5) * (options.spread || 20);
      positions[i3 + 2] = (Math.random() - 0.5) * (options.spread || 20);

      // Colors
      color.setHSL(
        options.hue || Math.random(),
        options.saturation || 0.7,
        options.lightness || 0.5
      );
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;

      // Sizes
      sizes[i] = Math.random() * (options.maxSize || 2) + (options.minSize || 0.5);
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.PointsMaterial({
      size: options.size || 1,
      sizeAttenuation: options.sizeAttenuation !== false,
      vertexColors: true,
      transparent: true,
      opacity: options.opacity || 0.8,
      blending: THREE.AdditiveBlending
    });

    return new THREE.Points(geometry, material);
  }

  /**
   * Create floating geometric shapes
   * @param {Object} options - Shape options
   * @returns {THREE.Group} Group of shapes
   */
  static createFloatingShapes(options = {}) {
    const group = new THREE.Group();
    const count = options.count || 20;

    const geometries = [
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.SphereGeometry(0.5, 16, 16),
      new THREE.ConeGeometry(0.5, 1, 8),
      new THREE.OctahedronGeometry(0.6),
      new THREE.TetrahedronGeometry(0.7)
    ];

    for (let i = 0; i < count; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = new THREE.MeshLambertMaterial({
        color: new THREE.Color().setHSL(Math.random(), 0.7, 0.6),
        transparent: true,
        opacity: 0.7
      });

      const mesh = new THREE.Mesh(geometry, material);
      
      // Random position
      mesh.position.set(
        (Math.random() - 0.5) * (options.spread || 20),
        (Math.random() - 0.5) * (options.spread || 20),
        (Math.random() - 0.5) * (options.spread || 20)
      );

      // Random rotation
      mesh.rotation.set(
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2
      );

      // Random scale
      const scale = Math.random() * 0.5 + 0.5;
      mesh.scale.setScalar(scale);

      group.add(mesh);
    }

    return group;
  }

  /**
   * Create a wireframe sphere with pulsing effect
   * @param {Object} options - Sphere options
   * @returns {THREE.Mesh} Wireframe sphere
   */
  static createWireframeSphere(options = {}) {
    const geometry = new THREE.SphereGeometry(
      options.radius || 2,
      options.widthSegments || 32,
      options.heightSegments || 32
    );
    
    const material = new THREE.MeshBasicMaterial({
      color: options.color || 0x00ffff,
      wireframe: true,
      transparent: true,
      opacity: options.opacity || 0.6
    });

    return new THREE.Mesh(geometry, material);
  }

  /**
   * Create a data visualization network
   * @param {Object} options - Network options
   * @returns {THREE.Group} Network group
   */
  static createDataNetwork(options = {}) {
    const group = new THREE.Group();
    const nodeCount = options.nodeCount || 50;
    const connectionProbability = options.connectionProbability || 0.1;

    // Create nodes
    const nodes = [];
    const nodeGeometry = new THREE.SphereGeometry(0.1, 8, 8);
    const nodeMaterial = new THREE.MeshBasicMaterial({
      color: options.nodeColor || 0x00ffff
    });

    for (let i = 0; i < nodeCount; i++) {
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      node.position.set(
        (Math.random() - 0.5) * (options.spread || 10),
        (Math.random() - 0.5) * (options.spread || 10),
        (Math.random() - 0.5) * (options.spread || 10)
      );
      nodes.push(node);
      group.add(node);
    }

    // Create connections
    const lineMaterial = new THREE.LineBasicMaterial({
      color: options.lineColor || 0x444444,
      transparent: true,
      opacity: 0.3
    });

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (Math.random() < connectionProbability) {
          const geometry = new THREE.BufferGeometry().setFromPoints([
            nodes[i].position,
            nodes[j].position
          ]);
          const line = new THREE.Line(geometry, lineMaterial);
          group.add(line);
        }
      }
    }

    return group;
  }

  /**
   * Create animated background waves
   * @param {Object} options - Wave options
   * @returns {THREE.Mesh} Wave mesh
   */
  static createWaves(options = {}) {
    const geometry = new THREE.PlaneGeometry(
      options.width || 20,
      options.height || 20,
      options.widthSegments || 50,
      options.heightSegments || 50
    );

    const material = new THREE.MeshLambertMaterial({
      color: options.color || 0x0066cc,
      transparent: true,
      opacity: options.opacity || 0.6,
      wireframe: options.wireframe || false
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -Math.PI / 2;

    return mesh;
  }

  /**
   * Animate wave vertices
   * @param {THREE.Mesh} waveMesh - Wave mesh to animate
   * @param {number} time - Current time
   * @param {Object} options - Animation options
   */
  static animateWaves(waveMesh, time, options = {}) {
    const positions = waveMesh.geometry.attributes.position;
    const amplitude = options.amplitude || 0.5;
    const frequency = options.frequency || 0.01;
    const speed = options.speed || 0.002;

    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      const z = Math.sin(x * frequency + time * speed) * amplitude +
               Math.cos(y * frequency + time * speed) * amplitude * 0.5;
      positions.setZ(i, z);
    }

    positions.needsUpdate = true;
  }

  /**
   * Handle window resize for Three.js scene
   * @param {THREE.Camera} camera - Camera to update
   * @param {THREE.WebGLRenderer} renderer - Renderer to update
   * @param {HTMLElement} container - Container element
   */
  static handleResize(camera, renderer, container) {
    const width = container.clientWidth;
    const height = container.clientHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  /**
   * Create a mouse-interactive effect
   * @param {THREE.Camera} camera - Scene camera
   * @param {HTMLElement} container - Container element
   * @returns {Object} Mouse position and update function
   */
  static createMouseInteraction(camera, container) {
    const mouse = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();

    const updateMouse = (event) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };

    container.addEventListener('mousemove', updateMouse);

    return {
      mouse,
      raycaster,
      updateMouse,
      cleanup: () => container.removeEventListener('mousemove', updateMouse)
    };
  }

  /**
   * Dispose of Three.js resources
   * @param {THREE.Scene} scene - Scene to dispose
   * @param {THREE.WebGLRenderer} renderer - Renderer to dispose
   */
  static dispose(scene, renderer) {
    scene.traverse((object) => {
      if (object.geometry) {
        object.geometry.dispose();
      }
      if (object.material) {
        if (Array.isArray(object.material)) {
          object.material.forEach(material => material.dispose());
        } else {
          object.material.dispose();
        }
      }
    });

    renderer.dispose();
  }
}

export default ThreeUtils;
