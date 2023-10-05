<script lang="ts">

</script>

<div class="hidden lg:ml-8 lg:block lg:self-stretch">
  <div class="flex h-full space-x-8">
    <div class="flex">
      <div class="relative flex">
        <!-- Item active: "border-indigo-600 text-indigo-600", Item inactive: "border-transparent text-gray-700 hover:text-gray-800" -->
        <button type="button" class="border-transparent text-gray-700 hover:text-gray-800 relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out" aria-expanded="false">Women</button>
      </div>
      <!--
        'Women' flyout menu, show/hide based on flyout menu state.

        Entering: "transition ease-out duration-200"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "transition ease-in duration-150"
          From: "opacity-100"
          To: "opacity-0"
      -->
    </div>
    <div class="flex">
      <div class="relative flex">
        <!-- Item active: "border-indigo-600 text-indigo-600", Item inactive: "border-transparent text-gray-700 hover:text-gray-800" -->
        <button type="button" class="border-transparent text-gray-700 hover:text-gray-800 relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out" aria-expanded="false">Men</button>
      </div>
      <!--
        'Men' flyout menu, show/hide based on flyout menu state.

        Entering: "transition ease-out duration-200"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "transition ease-in duration-150"
          From: "opacity-100"
          To: "opacity-0"
      -->
    </div>
    <a href="/" class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Company</a>
    <a href="/" class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Stores</a>
  </div>
</div>