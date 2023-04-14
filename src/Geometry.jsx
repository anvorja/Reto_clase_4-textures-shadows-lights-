import { DoubleSide } from "three";
import { useTexture } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber"

export default function Geometry() {

    const PATH = "/static/textures/door/"

    const cubeRef = useRef()

    useFrame((state, delta) => {
        cubeRef.current.rotation.y += 0.01;
    })

    const props = useTexture({
        map: PATH + 'metallic.jpg',
        //displacementMap: PATH + 'height.png',
        normalMap: PATH + 'normal.jpg',
        roughnessMap: PATH + 'roughness.jpg',
        aoMap: PATH + 'aO.jpg',
        metalnessMap: PATH + 'metallic.jpg'
    })

    return (<>
        {/* <mesh rotation-y={Math.PI / 12}>
            <planeGeometry args={[2, 3]} />
            <meshStandardMaterial {...props} side={DoubleSide} />
        </mesh> */}

        <mesh ref={cubeRef} castShadow={true} rotation-y={Math.PI * 0.25} position-x={3} scale={1.1}>
            <boxGeometry scale={1.5} />
            <meshStandardMaterial {...props}  side={DoubleSide} />
        </mesh>

        </>
    )
}