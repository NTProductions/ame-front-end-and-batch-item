// Front End
var frontEnd = app.getFrontend();
// this will allow us to add items to the render queue
// Methods
frontEnd.addDLToBatch(project, format, preset, guid, destination);
frontEnd.addCompToBatch(project, preset, destination);
frontEnd.addFileToBatch(file, format, preset, destination);
frontEnd.addFileSequenceToBatch();
frontEnd.addXMLToBatch();
frontEnd.addTeamProjectsItemToBatch();
frontEnd.stitchFiles();
frontEnd.stopBatch();
frontEnd.getDLItemsAtRoot(projectPath);

// Batch Item
// this is the data returned after you add something to the render queue
// Attributes
batchItem.outputFiles;
batchItem.encodeProgress;
batchItem.outputWidth;
batchItem.outputHeight;
// Methods
batchItem.getEncodeProgress();
batchItem.getEncodeTime();
batchItem.getCurrentBatchPreview();
batchItem.getPresetList();
batchitem.getMissingAssets();
batchItem.loadPreset();
batchItem.loadFormat();
batchItem.setWorkArea();
batchItem.setUsePreviewFiles();
batchItem.setUseMaximumRenderQuality();
batchItem.setUseFrameBlending();
batchItem.setIncludeSourceXMP();
batchItem.setIncludeSourceCuePoints();
batchItem.setCropState();
batchItem.setCropType();
batchItem.setCropOffsets();
batchItem.setOutputFrameSize();
batchItem.setXMPData();
batchItem.setCuePointData();
batchItem.setScaleType();