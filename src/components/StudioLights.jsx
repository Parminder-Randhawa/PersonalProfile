import { Environment, Lightformer } from "@react-three/drei"

const StudioLights = () => {
  return (
    <group name="lights">
        <Environment resolution={256}>
            <group>
                <Lightformer
                    form="rect"
                    intensity={7}
                    position={[-12, 5, -5]}
                    scale={5}
                    rotation-y={Math.PI / 2}
                />

                <Lightformer
                    form="rect"
                    intensity={6}
                    position={[10, 0, 1]}
                    scale={5}
                    rotation-y={Math.PI / 2}
                />
            </group>
        </Environment>

        <spotLight
            position={[-2, 35, 5]}
            angle={0.15}
            decay={0.3}
            intensity={Math.PI * 0.2}
        />

        <spotLight
            position={[0, -35, 5]}
            angle={0.15}
            decay={0.2}
            intensity={Math.PI * 0.2}
        />

        
    </group>
  )
}

export default StudioLights