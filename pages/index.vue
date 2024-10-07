<script setup lang="ts"></script>

<template>
  <v-container>
    <v-row align="center" justify="center" no-gutters style="height: 100vh">
      <v-col sm="12" md="8" lg="6" xl="6">
        <v-card>
          <v-toolbar color="primary">
            <v-toolbar-title> Masuk Aplikasi </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Username"
                  variant="outlined"
                  color="primary"
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password"
                  type="password"
                  variant="outlined"
                  color="primary"
                />
              </v-col>
              <v-col cols="12">
                <v-switch label="Simpan password" hide-details />
              </v-col>
            </v-row>
          </v-card-text>

          <v-card-actions>
            <v-btn color="primary" block variant="outlined">Masuk</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
