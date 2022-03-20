// Endpoints
const BASEURL = 'http://localhost:3001/'

export const PETITIONS = {
  // ============ User ======================
  // Register candidate
  register: `${BASEURL}api/user/register`,
  // Activate user
  activateUser: `${BASEURL}api/user/activation/`,
  // ========================================

  // ============ Convocatory ===============
  // Create convocatory
  createConvocatory: `${BASEURL}api/admin/new-conv`,
  // Get all Convocatories
  getConvocatories: `${BASEURL}api/admin/convocatories`,
  // Update convocatory
  updateConcovatory: `${BASEURL}api/admin/update-conv/`,
  // ========================================

  // ============ Tech Test ================
  // Create tech test
  createTechTest: `${BASEURL}api/admin/new-test`,
  // Get all tech test
  getTechTest: `${BASEURL}api/admin/test`,
  // Get one tech test
  getOneTechTest: `${BASEURL}api/admin/test/`,
  // Update tech test
  updateTechTest: `${BASEURL}api/admin/test/`,
  // Delete tech test
  deleteTechTest: `${BASEURL}api/admin/test/`
  // ========================================

}