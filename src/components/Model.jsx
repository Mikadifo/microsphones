import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";

gsap.registerPlugin(ScrollTrigger);

const finalPosition = [42, 632, 4641];
const leftLocation = {
  scenePosition: { x: -480, y: -12, z: 65 },
  sceneRotation: { x: 0, y: -0.4, z: 0 },
};
const middleLocation = {
  scenePosition: { x: 0, y: 0, z: 0 },
  sceneRotation: { x: 0, y: 1.8, z: 0 },
};
const rightLocation = {
  scenePosition: { x: 400, y: 100, z: 0 },
  sceneRotation: { x: -6.8, y: 2.9, z: 0 },
};

const Model = (props) => {
  const { scene } = useGLTF("./../../microsoft_headphones.glb");
  const { camera } = useThree();
  const timeline = gsap.timeline();

  const { camPos, scenePos, sceneRot } = useControls({
    camPos: {
      value: {
        x: finalPosition[0],
        y: finalPosition[1],
        z: finalPosition[2],
      },
      step: 0.5,
    },
    scenePos: {
      value: { x: 0, y: 0, z: 0 },
      step: 0.5,
    },
    sceneRot: {
      value: { x: 0, y: 1.8, z: 0 },
      step: 0.1,
    },
  });

  useFrame(() => {
    //camera.position.x = camPos.x;
    //camera.position.y = camPos.y;
    //camera.position.z = camPos.z;
    //scene.position.x = scenePos.x;
    //scene.position.y = scenePos.y;
    //scene.position.z = scenePos.z;
    //scene.rotation.x = sceneRot.x;
    //scene.rotation.y = sceneRot.y;
    //scene.rotation.z = sceneRot.z;
  });

  const ref = useRef();

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      timeline
        .to(camera.position, {
          ease: "none",
          duration: 1,
          x: finalPosition[0],
          y: finalPosition[1],
          z: finalPosition[2],
        })
        .to(scene.position, {
          ease: "none",
          duration: 2,
          x: leftLocation.scenePosition.x,
          y: leftLocation.scenePosition.y,
          z: leftLocation.scenePosition.z,
          scrollTrigger: {
            trigger: ".right-section",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
            markers: true,
          },
        })
        .to(scene.rotation, {
          ease: "none",
          duration: 2,
          x: leftLocation.sceneRotation.x,
          y: leftLocation.sceneRotation.y,
          z: leftLocation.sceneRotation.z,
          scrollTrigger: {
            trigger: ".right-section",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
            markers: true,
          },
        })
        .to(scene.position, {
          ease: "none",
          duration: 2,
          x: middleLocation.scenePosition.x,
          y: middleLocation.scenePosition.y,
          z: middleLocation.scenePosition.z,
          scrollTrigger: {
            trigger: ".middle-section",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
            markers: true,
          },
        })
        .to(scene.rotation, {
          ease: "none",
          duration: 2,
          x: middleLocation.sceneRotation.x,
          y: middleLocation.sceneRotation.y,
          z: middleLocation.sceneRotation.z,
          scrollTrigger: {
            trigger: ".middle-section",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
            markers: true,
          },
        })
        .to(scene.position, {
          ease: "none",
          duration: 2,
          x: rightLocation.scenePosition.x,
          y: rightLocation.scenePosition.y,
          z: rightLocation.scenePosition.z,
          scrollTrigger: {
            trigger: ".left-section",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
            markers: true,
          },
        })
        .to(scene.rotation, {
          ease: "none",
          duration: 2,
          x: rightLocation.sceneRotation.x,
          y: rightLocation.sceneRotation.y,
          z: rightLocation.sceneRotation.z,
          scrollTrigger: {
            trigger: ".left-section",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
            markers: true,
          },
        });
    });
    return () => context.revert();
  });

  return <primitive object={scene} {...props} ref={ref} />;
};

export default Model;
