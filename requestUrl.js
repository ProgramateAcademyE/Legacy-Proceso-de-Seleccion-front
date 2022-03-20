const BASEURL = 'http://localhost:3001/'
export const PETITIONS = {
  // Register candidate
  register: `${BASEURL}api/user/register`,
  // Create convocatory
  createConvocatory: `${BASEURL}api/admin/new-conv`,
  // Get all Convocatories
  getConvocatories: `${BASEURL}api/admin/convocatories`,
  // Update convocatory
  updateConcovatory: `${BASEURL}api/admin/update-conv/`,
  // Activate user
  activateUser: `${BASEURL}api/user/activation/`,
  // Create tech test
  createTechTest: `${BASEURL}api/admin/new-test`,
  // Get all tech test
  getTechTest: `${BASEURL}api/admin/test`,
}