import Units from "./components/units";

function Index() {
  // const 

  return (
    <div className="w-1/2">
      <p className="text-xl font-bold">Link Subdirectory Structure:</p>
      <p>/<span className="text-red-600">[subject]</span>/<span className="text-yellow-500">[unit]</span>/<span className="text-blue-600">[mode]</span></p>
      <p className="mt-2">mode:</p>
      <table class="w-full text-sm text-center text-gray-900">
        <thead class="text-xs uppercase bg-gray-50">
          <tr>
            <th scope="col" class="py-3 px-6">
              Mode
            </th>
            <th scope="col" class="py-3 px-6">
              Meaning
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b">
            <th scope="row" class="py-4 px-6 font-medium whitespace-nowrap">
              choices
            </th>
            <td class="py-4 px-6">
              Multiple Choice Question
            </td>
          </tr>
          <tr class="bg-white border-b">
            <th scope="row" class="py-4 px-6 font-medium whitespace-nowrap">
              blanks
            </th>
            <td class="py-4 px-6">
              Fill In The Blanks
            </td>
          </tr>
        </tbody>
      </table>
      <p className="mt-2">subject:</p>
      <table class="w-full text-sm text-center text-gray-900">
        <thead class="text-xs uppercase bg-gray-50">
          <tr>
            <th scope="col" class="py-3 px-6">
              Subject
            </th>
            <th scope="col" class="py-3 px-6">
              Meaning
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b">
            <th scope="row" class="py-4 px-6 font-medium whitespace-nowrap">
              eng
            </th>
            <td class="py-4 px-6">
              English
            </td>
          </tr>
          <tr class="bg-white border-b">
            <th scope="row" class="py-4 px-6 font-medium whitespace-nowrap">
              chi
            </th>
            <td class="py-4 px-6">
              Chinese
            </td>
          </tr>
          <tr class="bg-white border-b">
            <th scope="row" class="py-4 px-6 font-medium whitespace-nowrap">
              chem
            </th>
            <td class="py-4 px-6">
              Chemistry
            </td>
          </tr>
          <tr class="bg-white border-b">
            <th scope="row" class="py-4 px-6 font-medium whitespace-nowrap">
              misc
            </th>
            <td class="py-4 px-6">
              Miscellaneous
            </td>
          </tr>
        </tbody>
      </table>
      <p className="mt-2">unit:</p>
      <Units></Units>
    </div>
  );
}

export default Index;