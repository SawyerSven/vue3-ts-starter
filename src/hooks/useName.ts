import { ref } from "vue";


const genRandomName = (): string => {
  const nameBft = ['lisa', 'andy', 'bush', 'jordan', 'michael', 'lilith']
  return nameBft[Math.trunc(Math.random() * 6)]
}


export const useName = () => {
  const name = ref(genRandomName())
  const setName = (v: string) => {
    name.value = v
  }
  return {
    name,
    setName
  }
}