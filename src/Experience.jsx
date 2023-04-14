
/**
 * Andrés Borja 2040507
 */

//Descomentar para los diferentes helper

import { OrbitControls, useHelper } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Door from './Door'
import Geometry from './Geometry'
import Floor from './Floor'
import { useRef } from 'react'
import { DirectionalLightHelper, HemisphereLightHelper, PointLightHelper, SpotLightHelper } from 'three'

export default function Experience() {

    // const directionalLightRef = useRef()
    // useHelper(directionalLightRef, DirectionalLightHelper, 1)

    // const hemisphereLightRef = useRef();
    // useHelper(hemisphereLightRef, HemisphereLightHelper)

    // const pointLightRef = useRef();
    // useHelper(pointLightRef, PointLightHelper)

    const spotLightRef = useRef();
    useHelper(spotLightRef, SpotLightHelper)

    const rectAreaLightRef = useRef();

    return <>
        <Perf position="top-left" />

        <OrbitControls makeDefault />

        {/* <directionalLight ref={directionalLightRef} castShadow={true} position={[0, 3, -2]} intensity={1.5} /> */}

        {/* <hemisphereLight
            ref={hemisphereLightRef}
            intensity={6.5}
            // skyColor={0xffffbb}
            color={'#F69C4C'}
            groundColor={0x080820}
            position={[4, 3, 0]}
        /> */}


        {/* <pointLight
            ref={pointLightRef}
            position={[1, 3, -4]}
            intensity={0.8}
            distance={20}
            decay={2}
            color={'#00ff00'}
        /> */}


        <spotLight
            ref={spotLightRef}
            castShadow={true}
            position={[1, 3, -4]}
            intensity={30}
            distance={15}
            penumbra={0.2}
            angle={Math.PI / 4}
            decay={2.5}
            color={'#39e847'}
        />

        {/* <rectAreaLight
            ref={rectAreaLightRef}
            width={15}
            height={5}
            intensity={8}
            position={[0, 2, 2]}
            color={'#39E847'}
        /> */}


        <ambientLight intensity={0.5} />
        <Door />
        <Geometry />
        <Floor />
    </>
}