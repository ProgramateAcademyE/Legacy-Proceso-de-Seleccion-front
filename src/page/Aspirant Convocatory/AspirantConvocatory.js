import { PETITIONS } from "../../../requestUrl";





const AspirantConvocatorys = () => {
    const [Aspirantconvocatories, setAspirantConvocatories] = useState([]);
  
    const getAllConvocatories = async () => {
      const res = await fetch(PETITIONS.getConvocatories);
      const response = await res.json();
    
      return response;
    }
  
    useEffect(() => {
      getAllConvocatories().then((convocatory) => setAspirantConvocatories(convocatory));
    }, []);
  
    const Convocatories = Aspirantconvocatories.map((conv) => ({
        "Convocatoria": conv.name,
        "Inicio Bootcamp": conv.initialBootcampDate,
        "Fin Bootcamp": conv.finalBootcampDate,
        "residenceCountry": allValues.residenceCountry,
        residencyDepartment: allValues.residenceDepartment,
        maxAge: allValues.age,
        maxSocioeconomicStratus: allValues.stratus,
        gender: allValues.gender,
        typePopulation: allValues.typePopulation
      }));
}