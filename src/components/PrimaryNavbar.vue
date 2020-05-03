<template>
  <b-navbar toggleable="lg" type="dark" variant="primary" fixed="top">
    <b-container>
      <b-navbar-brand to="/">Personality test</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/" :exact="true">Home</b-nav-item>
          <b-nav-item to="/test">Test</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>
