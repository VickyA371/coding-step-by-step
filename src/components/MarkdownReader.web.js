// components/ReadmeViewer.js
import React, { useState, useEffect } from "react";
import { Text, ScrollView, View, StyleSheet } from "react-native";
import axios from "axios";
import ReactMarkdown from "react-markdown";

const MarkdownReader = ({ username, repo, branch, file }) => {
  const [readme, setReadme] = useState(``);
  console.log("Web react markdown");
  useEffect(() => {
    const fetchReadme = async () => {
      try {
        const response = await axios.get(
          `https://raw.githubusercontent.com/${username}/${repo}/${branch}/${file}`
        );
        setReadme(response.data);
      } catch (error) {
        console.error("Error fetching README:", error);
      }
    };

    fetchReadme();
  }, [username, repo]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ReactMarkdown>{readme}</ReactMarkdown>
    </ScrollView>
  );
};

export default MarkdownReader;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});