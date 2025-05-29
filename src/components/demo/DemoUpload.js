'use client';

import { useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useAppStore } from '@/store/useAppStore';
import { 
  Upload, 
  Camera, 
  Image as ImageIcon, 
  X, 
  Check,
  Zap,
  ArrowRight
} from 'lucide-react';

export default function DemoUpload() {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const fileInputRef = useRef(null);
  
  const { uploadPhoto, nextDemoStep, isLoading } = useAppStore();

  // Sample demo images
  const sampleImages = [
    {
      id: 1,
      name: "Coffee Shop",
      url: "/demo/coffee-shop.jpg",
      description: "Local business with reviews"
    },
    {
      id: 2,
      name: "Person",
      url: "/demo/person.jpg", 
      description: "Community member profile"
    },
    {
      id: 3,
      name: "Vehicle",
      url: "/demo/vehicle.jpg",
      description: "Car with license plate"
    },
    {
      id: 4,
      name: "Lost Item",
      url: "/demo/lost-item.jpg",
      description: "Missing phone case"
    }
  ];

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file) => {
    if (file.type.startsWith('image/')) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleSampleImage = (sample) => {
    // Simulate file selection with sample image
    setSelectedFile({ 
      name: sample.name, 
      type: 'image/jpeg',
      size: 1024000,
      demo: true,
      url: sample.url
    });
    setPreviewUrl(sample.url);
  };

  const clearSelection = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleUpload = async () => {
    if (selectedFile) {
      await uploadPhoto(selectedFile);
      nextDemoStep();
    }
  };

  return (
    <div className="space-y-8">
      
      {/* Upload Area */}
      <Card variant="glass" className="overflow-hidden">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Upload a Photo</h2>
            <p className="text-muted-foreground">
              Choose an image to analyze, or use one of our sample photos
            </p>
          </div>

          {!selectedFile ? (
            <div
              className={`relative border-2 border-dashed rounded-xl p-12 text-center transition-all duration-300 ${
                dragActive 
                  ? 'border-primary bg-primary/5 scale-105' 
                  : 'border-muted-foreground/30 hover:border-primary/50 hover:bg-primary/5'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileInput}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              
              <div className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                  <Upload className="w-8 h-8 text-primary" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">
                    {dragActive ? 'Drop your image here' : 'Drag & drop an image'}
                  </h3>
                  <p className="text-muted-foreground">
                    or click to browse your files
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Supports JPG, PNG, WebP up to 10MB
                  </p>
                </div>

                <Button variant="neon" className="group">
                  <ImageIcon className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                  Choose File
                </Button>
              </div>
            </div>
          ) : (
            /* File Preview */
            <div className="space-y-6">
              <Card variant="elevated" className="p-6">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 bg-muted rounded-lg overflow-hidden">
                      <img 
                        src={previewUrl} 
                        alt="Preview" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">{selectedFile.name}</h3>
                        <p className="text-muted-foreground text-sm">
                          {selectedFile.demo ? 'Demo Image' : `${(selectedFile.size / 1024 / 1024).toFixed(2)} MB`}
                        </p>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={clearSelection}
                        className="group"
                      >
                        <X className="w-4 h-4 group-hover:animate-spin" />
                      </Button>
                    </div>

                    <div className="flex items-center space-x-2 text-sm text-primary">
                      <Check className="w-4 h-4" />
                      <span>Ready for analysis</span>
                    </div>

                    <Button 
                      variant="holographic" 
                      onClick={handleUpload}
                      disabled={isLoading}
                      className="group"
                    >
                      {isLoading ? (
                        <>
                          <Zap className="w-4 h-4 mr-2 animate-pulse" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <Zap className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                          Analyze Photo
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Sample Images */}
      <Card variant="glass">
        <CardContent className="p-8">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold mb-2">Try Sample Images</h3>
            <p className="text-muted-foreground">
              Click any image below to see how MessageYou works
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sampleImages.map((sample) => (
              <Card 
                key={sample.id}
                variant="minimal"
                className="group cursor-pointer hover:scale-105 transition-all duration-300"
                onClick={() => handleSampleImage(sample)}
              >
                <CardContent className="p-4 space-y-3">
                  <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <Camera className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="text-center space-y-1">
                    <h4 className="font-medium text-sm">{sample.name}</h4>
                    <p className="text-xs text-muted-foreground">
                      {sample.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Instructions */}
      <Card variant="minimal" className="p-6">
        <div className="text-center space-y-4">
          <h3 className="font-semibold">What happens next?</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="space-y-2">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">1</span>
              </div>
              <p className="text-muted-foreground">
                Our AI analyzes your photo using computer vision
              </p>
            </div>
            <div className="space-y-2">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">2</span>
              </div>
              <p className="text-muted-foreground">
                We search our database for matching entities
              </p>
            </div>
            <div className="space-y-2">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary font-bold">3</span>
              </div>
              <p className="text-muted-foreground">
                You'll see community reports and insights
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
